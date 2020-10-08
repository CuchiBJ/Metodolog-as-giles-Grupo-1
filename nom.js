const app = new Vue({
el: '#app',
data: {
    
    nombres:[
        {nombre:[]}
    ],
    nuevoparticipante: ""
    

},

methods: {
    
    agregarparticipante() {
      
        if (this.nuevoparticipante!=""){
        this.nombres.push({
            nombre: this.nuevoparticipante

          
        });
        this.nuevoparticipante= '';
        localStorage.setItem('nom-vue', JSON.stringify(this.nombres));
        console.log(this.nombres)
        } else {
            swal("Debe escribir un nombre!!");
        }
    },
    borrar(index) {
      this.nombres.splice(index,1);
      localStorage.setItem('nom-vue', JSON.stringify(this.nombres));
      }
},

created: function() {
    let datosDB = JSON.parse(localStorage.getItem('nom-vue'))
    if (datosDB === null) {
        this.nombres = [];

    } else {
        this.nombres = datosDB;
    }
}


})