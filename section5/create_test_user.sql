CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON test.* TO 'test_user'@'localhost';
