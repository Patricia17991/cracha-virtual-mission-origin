/* a variável let = muda o valor e a const não muda o valor. Não tem como criar uma variável sem const ou let*/



/*o JS vai gerar o link e por isso vamos colocar na const só o usuario */
const linksSocialMedia = {

     github : "jakeliny",
     youtube : "jakelinygracielly",
     facebook : "maykbrito",
     instagram : "jakeliny.gracielly",
     twitter : "jakelinytec"
}

/*função que muda o valor dos dados */
function changeSocialMediaLinks(){
      /*vamos usar o DOM aqui */
    document.getElementById('userName').textContent = 'Patricia'; /*pegando o elemento pelo id que esta lá no html, o textContent é p/ mudar o valor recebido anteriormente */
}
 
changeSocialMediaLinks();
