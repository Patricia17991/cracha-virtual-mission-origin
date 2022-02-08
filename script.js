//a variável let = muda o valor e a const não muda o valor. Não tem como criar uma variável sem const ou let



//o JS vai gerar o link e por isso vamos colocar na const só o usuario 
const LinksSocialMedia = {

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
      const social = li.getAttribute('class') //dentro da const  estou pegando a classe da li
           
            li.children[0].href =`https://${social}.com/${LinksSocialMedia[social]}` //passando o novo conteúdo do href.
        
        
      }

}
 
changeSocialMediaLinks();

//função que pega as informações do github e trás p/ aqui p/ depois substituirmos no html.
function getGitHubProfileInfos(){
     //definir url da api do github
     const url = `https://api.github.com/users/${LinksSocialMedia.github}`

     //chegando na url e pegando o que ela responder, no caso o JSON (usando o comando fetch)
     fetch(url).then(response => response.json()) //transforma em json
     .then(data => {
         //vamos pegar no html os elementos que queremos dentro do data.
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url 
     }) //armazena em json
}
    
}

getGitHubProfileInfos()

//promise no js é um recurso que usamos p/ pegar respostas de alguma coisa (.then())

//podemos criar quantos thens forem preciso
