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
      retos: [],
      largo:'',
      reto:''
   
      
        },

        
         created() {
             this.obtenerRetos();
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

        obtenerRetos(){
            fetch('/api/retos')
              .then(res => res.json())
              .then( data => {
                this.retos = data;
                console.log(this.retos);

              })
              .catch(err=>console.log(err))
          },

        jugar() {


            var clave = JSON.parse(localStorage.getItem('nom-vue'));

            var x= clave.length

            if( x !== 0)
            {
                this.num1 = '';
                this.num2 = '';
                this.elegir();
                this.elegirreto();
            
                document.getElementById("cont2").style.display="block";

            }else{
                swal('Debe ingresar participantes primero')
            }
            
  
        },
        elegir() {  

            var clave = JSON.parse(localStorage.getItem('nom-vue'));

            var x= clave.length
            
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               while (num == numer)
               {
                var num = Math.floor((Math.random() * (x-0))+0);

                var numer = Math.floor((Math.random() * (x-0))+0);

               }
               this.va = clave[num].nombre
               this.vari = clave[numer].nombre

        },
        elegirreto(){
            var largo = this.retos.length
            var num = Math.floor((Math.random() * (largo-0))+0);

            this.reto= this.retos[num]
         
            
        },

        comparar() {
            if (this.num1 == this.num2 && this.num1 != '' && this.num2 != '' ) {
            
                swal("Deben realizar el reto!!!", this.reto);

            } if (this.num1 != this.num2 && this.num1 != '' && this.num2 != '' ){
              
                swal("Zafaron!!...", "...Por ahora!");
            } if (this.num1 == '' && this.num2 == '') {
                swal("Deben elegir un numero!!");
            }
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