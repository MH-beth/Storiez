CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `username` varchar(52) NOT NULL,
    `password` varchar(52) NOT NULL,
    `email` varchar(52) NOT NULL,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE =InnoDB DEFAULT CHARSET=latin1;
