import os

def split_sql_file(input_file, output_dir, batch_size=20):
    print(f"开始处理SQL文件: {input_file}")
    
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    print(f"输出目录创建成功: {output_dir}")
    
    try:
        # 读取原始 SQL 文件
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        print("成功读取SQL文件")
        
        # 获取INSERT语句的列名部分，修改为 INSERT OR IGNORE
        insert_header = content.split('values')[0].strip().replace('insert into', 'insert or ignore into')
        print(f"INSERT语句头部: {insert_header}")
        
        # 提取所有值
        values_part = content.split('values')[1].strip()
        # 分割每组值（去掉开头的 ( 和结尾的 );）
        values = values_part.strip('(); ').split('),\n        (')
        print(f"找到 {len(values)} 组数据")
        
        # 按批次拆分
        batch_count = 0
        for i in range(0, len(values), batch_size):
            batch = values[i:i + batch_size]
            batch_count += 1
            
            # 写入新文件
            filename = f'{output_dir}/batch_{batch_count}.sql'
            with open(filename, 'w', encoding='utf-8') as f:
                # 移除事务相关语句
                for value in batch:
                    f.write(f"{insert_header} values ({value});\n")
            print(f"已生成文件: {filename}, 包含 {len(batch)} 条语句")
        
        print(f"处理完成，共生成 {batch_count} 个文件")
        
    except Exception as e:
        print(f"发生错误: {str(e)}")

if __name__ == '__main__':
    input_file = './data/toilet.sql'
    output_dir = './data/sql_batches'
    
    if not os.path.exists(input_file):
        print(f"错误：输入文件不存在: {input_file}")
    else:
        split_sql_file(input_file, output_dir) 