
export interface ResponseWrapper<T> {
  data: T;
  success: boolean;
  message: string;
} 


export const wrapperResponse = <T>(
  data: T,
  success: boolean = true,
  message: string = ''
): ResponseWrapper<T> => {
  return {
    success,
    message,
    data
  };
};

// 成功响应的快捷方法
export const successResponse = <T>(data: T, message: string = '操作成功'): ResponseWrapper<T> => {
  return wrapperResponse(data, true, message);
};

// 错误响应的快捷方法
export const errorResponse = <T>(message: string, data?: T): ResponseWrapper<T> => {
  return wrapperResponse(data as T, false, message);
};
