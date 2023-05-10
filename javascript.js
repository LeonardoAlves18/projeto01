function togglemode() {
    const html = document.documentElement
    html.classList.toggle('claro')
    //comando abaixo resumido abaixo 

    //if (html.classList.contains("claro")) {  
   // html.classList.remove("claro")
   //  } 
   // else {
   //   html.classList.add("claro")
   // }
   
   const img = document.querySelector("#profile img")

   if(html.classList.contains("claro")){

    img.setAttribute("src", "./assets/Ellipse.png")
   } else {
    img.setAttribute("src", "./assets/Ellipse-1.png")
   }
 
   const alt = document.querySelector("#profile img")

   if(html.classList.contains("claro")){

    alt.setAttribute("uma pessoa olha para o lado.")
   } else {
    alt.setAttribute("uma mão na gravata estilosa.")
   }

}

function mae(){
    alert ("feliz dia das mães kkk, ti amo muito agradeço por tudo que voce ja fez por mim e pelo meu irmao, eu sei que nao foi facil chegar ate aqui mãe, sei muito bem oque nois passamos, eu agradeço por sempre estar do meu lado e si preocupando, algumas vezes ate demais kkkkk,prometo pra senhora que vou te dar orgulho,e ti da tudo que a senhora fez pra mim e dobro! Obrigado por ter sido a minha Mãe <3 ")
}