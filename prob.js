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
      retos: [
        'Comerse un ajo',
        'Decirle un piropo atrevido a alguien desconocido en instagram',
        'Suplicar a su ex que vuelvan',
        'Intercambiar toda la vestimenta con un jugador del otro género',
        'Cantar una balada romántica a capela',
        'Darle un beso al jugador de su izquierda',
        'Publicar en el muro de Facebook de un contacto casado algún mensaje picante',
        'Hacer una confesión falsa a su mamá',
        'Uno de los participantes tiene que pegarle una cachetada al otro, sino toman',
        'Hacer fondo',
        'No pueden ir al baño hasta que vuelvan a salir sus nombres',
        'Parados el resto de la previa',
        'Debajo de la mesa hasta que vuelvan a salir sus nombres',
        'Hacer un karaoke en dueto',
        'Tomar con su mano no habil el resto del juego',
        'Entregan sus celulares al resto de la previa, se revisa todo',
        'Subir una historia a instagram haciendo algo que el resto de la previa elija (Por ejemplo: cantando)',
        'Confesarle el amor a uno de sus contactos (A eleccion de los participantes de la previa)'
    
      ],
      largo:'',
      reto:''
   
      
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

        jugar() {
            
            this.num1 = '';
            this.num2 = '';
            this.elegir();
            this.elegirreto();
        
            document.getElementById("cont2").style.display="block";
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

   

            } 
            else
            {
                alert('Debe ingresar participantes primero')
            }
          // var x = Object.keys(objetoJson).length;
            //var myNumeroAleatorio = Math.floor(Math.random()*(x+1))         
        
        },
        elegirreto(){
            var largo = this.retos.length
            var num = Math.floor((Math.random() * (largo-0))+0);

            this.reto= this.retos[num]
         
            
        },

        comparar() {
            if (this.num1 == this.num2) {
            
                swal("Deben realizar el reto!!!", "...and here's the text!");

            } else{
              
                swal("Zafaron!!...", "...Por ahora!");
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