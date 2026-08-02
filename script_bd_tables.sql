/* CREATE DATABASE ejercicio_backend; */


USE ejercicio_backend;

INSERT INTO usuarios
(nombreUsuario, email, contrasenia, createdAt, updatedAt)
VALUES
('sergiog', 'sergio@gmail.com', '123456', NOW(), NOW()),
('maria22', 'maria@gmail.com', 'abc123', NOW(), NOW()),
('juanperez', 'juan@gmail.com', 'juan2026', NOW(), NOW()),
('laura89', 'laura@gmail.com', 'laura123', NOW(), NOW()),
('carlos_dev', 'carlos@gmail.com', 'pass123', NOW(), NOW()),
('ana_rojas', 'ana@gmail.com', 'ana456', NOW(), NOW()),
('lucas10', 'lucas@gmail.com', 'lucas789', NOW(), NOW()),
('valentina', 'vale@gmail.com', 'vale123', NOW(), NOW()),
('fernando7', 'fernando@gmail.com', 'fer2026', NOW(), NOW()),
('sofia_dev', 'sofia@gmail.com', 'sofia123', NOW(), NOW());



SELECT * FROM usuarios;