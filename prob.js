const app2 = new Vue({
    el: '#app2',
    data: {
        num1: '',
        num2: '',
        clave: [],
        va:'',
        myNumeroAleatorio: '',
        x:'',
      num:'',
      numer:'',
      vari:'',
      tag:''
    },

    methods: {
        numelegido1(value) {
            this.num1 = value;
            console.log(this.num1);
        },
        numelegido2(value) {
            this.num2 = value;
            console.log(this.num2);
        },

        jugar(num1,num2) {
            if (num1 == num2) {
                //alert("Deben realizar el reto!!!");
                swal("Deben realizar el reto!!!", "...and here's the text!");

            } else{
              
                //alert("Zafaron... Por ahora!");
                swal("Zafaron!!...", "...Por ahora!");
            }
            this.num1 = '';
            this.num2 = '';
            this.elegir()
        },
        elegir() {  

            var clave = JSON.parse(localStorage.getItem('nom-vue'));

            var x= clave.length
            //console.log(x);;

            if( x !== 0)
            {
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               while (num == numer)
               {
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               }
               this.va = clave[num].nombre
               this.vari = clave[numer].nombre

                var tag= document.getElementById("resultado");
                tag.innerHTML=""+this.va+ " y " +this.vari+ " tienen que:";
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
    },
    computed: {
        deshabilitado1(){
            return this.num1 === 1 || this.num1 === 2 || this.num1 === 3;
        },

        deshabilitado2(){
            return this.num2 === 1 || this.num2 === 2 || this.num2 === 3;
        },
    }
})