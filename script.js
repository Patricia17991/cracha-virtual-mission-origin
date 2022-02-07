/* a variável let = muda o valor e a const não muda o valor. Não tem como criar uma variável sem const ou let*/

/*o JS vai gerar o link e por isso vamos colocar na const só o usuario */
const links = {

     github : "jakeliny",
     youtube : "jakelinygracielly",
     facebook : "maykbrito",
     instagram : "jakeliny.gracielly",
     twitter : "jakelinytec"
}


/*função é um tipo de dado estruturado(forma de agrupar comando do JS) */
function showMeSomething(texto){ /*texto é uma variável dentro d função, por isso não tem const ou let */
    alert(texto);

};

/*chamando a função */
showMeSomething("amigo estou aqui"); /*definindo o que vai entrar na função (na variável texto) */
