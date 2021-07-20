1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
```
SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';
```
2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
```
3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
```
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
```
4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
```
SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
```
5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
```
SELECT COUNT(Provider) FROM PiecesProviders.Provides WHERE Piece = 1;
```
7. Usando WHERE , faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).
8. Aplicando Restrições, faça os exercícios [deste link](https://sqlbolt.com/lesson/select_queries_with_constraints).
9. Estude e faça os exercícios das páginas 1 a 3 [deste link](http://www.sqlcourse.com/intro.html).
10. Exercícios de comparação de valores. Faça os exercícios [deste link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial).