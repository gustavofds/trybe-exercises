-- 1
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';

-- 2
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- 3
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%n%';

-- 4
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '% LTDA' ORDER BY name DESC;

-- 5
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

-- 6
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco ASC;

-- 7
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';