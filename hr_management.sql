-- Create database if not exists
CREATE DATABASE IF NOT EXISTS hr_management;

USE hr_management;

-- Table to store user information (employees)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role ENUM('admin', 'employee') NOT NULL DEFAULT 'employee',
  department VARCHAR(255) NOT NULL,
  designation VARCHAR(255) NOT NULL,
  mobile_number VARCHAR(15),
  hire_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store job postings
CREATE TABLE IF NOT EXISTS job_postings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  department VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('open', 'closed') NOT NULL DEFAULT 'open'
);

-- Table to store applications
CREATE TABLE IF NOT EXISTS applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  job_id INT NOT NULL,
  candidate_name VARCHAR(255) NOT NULL,
  candidate_email VARCHAR(255) NOT NULL,
  resume_url TEXT NOT NULL,
  status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (job_id) REFERENCES job_postings(id) ON DELETE CASCADE
);

-- Create a table for storing JWT refresh tokens 
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  token VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
