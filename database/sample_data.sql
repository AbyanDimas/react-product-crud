-- Sample Data untuk Product CRUD Application
-- Jalankan setelah schema.sql

USE product_db;

-- Insert sample products
INSERT INTO products (name, description, price, category, stock_quantity, image_url) VALUES
('iPhone 14 Pro', 'Apple iPhone 14 Pro dengan chip A16 Bionic dan kamera Pro 48MP', 15999000.00, 'Electronics', 25, 'https://example.com/iphone14pro.jpg'),
('Samsung Galaxy S23', 'Smartphone flagship Samsung dengan kamera 200MP dan prosesor Snapdragon 8 Gen 2', 12999000.00, 'Electronics', 30, 'https://example.com/galaxys23.jpg'),
('MacBook Air M2', 'Laptop Apple MacBook Air dengan chip M2, 13 inch, 8GB RAM, 256GB SSD', 18999000.00, 'Computers', 15, 'https://example.com/macbookair.jpg'),
('Dell XPS 13', 'Laptop premium Dell XPS 13 dengan Intel Core i7 dan layar 4K', 22999000.00, 'Computers', 10, 'https://example.com/dellxps13.jpg'),
('Sony WH-1000XM5', 'Headphone wireless dengan noise cancelling terbaik dari Sony', 4999000.00, 'Audio', 50, 'https://example.com/sony-headphone.jpg'),
('iPad Pro 12.9', 'Tablet Apple iPad Pro 12.9 inch dengan chip M2 dan layar Liquid Retina XDR', 16999000.00, 'Tablets', 20, 'https://example.com/ipadpro.jpg'),
('AirPods Pro 2', 'Earbuds wireless Apple dengan Active Noise Cancellation', 3499000.00, 'Audio', 40, 'https://example.com/airpodspro.jpg'),
('Nintendo Switch OLED', 'Konsol gaming Nintendo Switch model OLED dengan layar 7 inch', 4299000.00, 'Gaming', 35, 'https://example.com/switch-oled.jpg'),
('Canon EOS R6', 'Kamera mirrorless Canon EOS R6 dengan sensor full-frame 20.1MP', 28999000.00, 'Cameras', 8, 'https://example.com/canon-r6.jpg'),
('Logitech MX Master 3S', 'Mouse wireless premium untuk produktivitas dengan sensor 8K DPI', 1299000.00, 'Accessories', 60, 'https://example.com/mx-master.jpg');

