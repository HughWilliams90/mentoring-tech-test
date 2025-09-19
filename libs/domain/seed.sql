-- Use the database
USE database;

-- Create a test table
CREATE TABLE IF NOT EXISTS test (
                                    id INT AUTO_INCREMENT PRIMARY KEY,
                                    propertyType VARCHAR(255) NOT NULL,
    bedrooms INT,
    created_by int NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );