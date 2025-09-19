-- Use the database
USE database;

-- Create a test table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    taskName VARCHAR(255) NOT NULL,
    taskDescription MEDIUMTEXT NOT NULL,
    completed TINYINT DEFAULT 0,
    completed_at DATE NULL
    );