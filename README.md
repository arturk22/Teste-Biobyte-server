# Teste-Biobyte-server

## Feito com nodeJs, expressJs e MySQL
Disponivel no heroku com BD na nuvem usando clearDB para fazer a conexão.
Infelizmente o clearDB tem algumas limitações no plano free, sendo necessario reiniciar o dyno para uso.

Endereço nuvem:
https://server-biobyte.herokuapp.com/conta/lista // Lista todos os cadastros.

https://server-biobyte.herokuapp.com/verificaEmail/seumail@email.com // Faz a validação se o email está disponivel para que o cadastro seja efetivado, para que retorne o alert no front

https://server-biobyte.herokuapp.com/conta/cadastro // Onde o front usa para enviar o JSON ao back-end.


Endereço Local:

http://localhost:5000/conta/lista // Lista todos os cadastros.

http://localhost:5000/verificaEmail/seumail@email.com // Faz a validação se o email está disponivel para que o cadastro seja efetivado, para que retorne o alert no front

http://localhost:5000/conta/cadastro // Onde o front usa para enviar o JSON ao back-end.
