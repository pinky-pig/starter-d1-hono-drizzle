CREATE TABLE `toilet` (
	`toilet_id` text PRIMARY KEY NOT NULL,
	`toilet_name` text NOT NULL,
	`toilet_address` text NOT NULL,
	`toilet_area_id` text NOT NULL,
	`toilet_lng` real NOT NULL,
	`toilet_lat` real NOT NULL,
	`distance` integer,
	`avg_score` text DEFAULT '',
	`toilet_fire_protection` text DEFAULT '0',
	`toilet_property_right` text NOT NULL,
	`toilet_property_right_str` text NOT NULL,
	`toilet_paper_state` text DEFAULT 'none',
	`close_hours` text DEFAULT '24:00'
);
