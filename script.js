//a variável let = muda o valor e a const não muda o valor. Não tem como criar uma variável sem const ou let



//o JS vai gerar o link e por isso vamos colocar na const só o usuario 
const linksSocialMedia = {

     github : "jakeliny",
     youtube : "jakelinygracielly",
     facebook : "maykbrito",
     instagram : "jakeliny.gracielly",
     twitter : "jakelinytec"
}

//função que muda o valor dos dados 
function changeSocialMediaLinks(){
      /*vamos usar o DOM aqui */
     
      for(let li of socialLinks.children ){ //o children vai pegar todos os filhos do id socialLinks um de cada vez
      //const social = li.getAttribute('class') //dentro da const  estou pegando a classe da li
           
         li.children[0].href = "https://www.youtube.com/maykbrito" //passando o novo conteúdo do href   
         alert(li.children[0].href) //[0] posição do filho da li.
        
      }

}
 
changeSocialMediaLinks();
