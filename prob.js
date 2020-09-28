const app2 = new Vue({
    el: '#app2',
    data: {
        num1: '',
        num2: '',
        clave: [],
        va:[],
        myNumeroAleatorio: '',
        x:'',
      num:'',
      numer:'',
      vari:'',
      tag:''
    },

    methods: {
        jugar(num1,num2) {
            if (num1 <4 && num2 <4) {
                alert("numeros validos");

            } else{
              
                alert("Ambos numeros deben estar entre el 1 y el 3")
            }
        },
        elegir() {  

            var clave = JSON.parse(localStorage.getItem('nom-vue'));

            var x= clave.length
            console.log(x);;

            if( x !== 0)
            {
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               while (num == numer)
               {
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               }
                var va = clave[num].nombre
                var vari = clave[numer].nombre

                var tag= document.getElementById("resultado");
                tag.innerHTML=""+va+ " y " +vari+ " tienen que:";
               // document.getElementById('resultado').innerHTML = va;
                //document.getElementById('resultado2').innerHTML = vari;

            } 
            else
            {
                alert('Debe ingresar participantes primero')
            }

          
        
        

           // var x = Object.keys(objetoJson).length;
            //var myNumeroAleatorio = Math.floor(Math.random()*(x+1))

            
          
          
         
         

            
          
         
        
        }
    }
})