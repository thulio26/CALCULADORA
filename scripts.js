

 function inserir(a){
    var tela = document.querySelector('.tela').innerHTML;
     document.querySelector('.tela').innerHTML = tela + a;
 }
   function apagartudo(){
    document.querySelector('.tela').innerHTML = ''
   }
   function apagar(){
    var tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length - 1)
   }
   
   function calcular(){
    var tela = document.querySelector('.tela').innerHTML;
     document.querySelector('.tela').innerHTML = eval(tela)
 

   }

