const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
});
const app = new Vue({
  el: '#app3',
  data: {
    rol:null,
    trago: {
      nombre: '',
      ingredientes: '',
      preparacion: '',
      graduacion: '',
      filename: '',
      path: ''
    },
    cAdmin:null,
    tragosP: null,
    tragos: null, //[ 
      //{name:'Margarita', ing: 'Tequila, triple seco y jugo de lima'},
      //{name:'Mojito', ing: 'Ron, azucar, menta, lima, agua con gas  y hielo '},
      //{name:'Gintonic', ing: 'Ginebra y tónica'},
      //{name:'Caipirinha', ing: 'Cachaza, lima o limon, azucar y hielo'},
      //{name:'Manhattan',ing: 'Whisky y vermut rojo'},
      //{name:'Piña colada', ing: 'Piña, crema de coco y ron'},
      //{name:'Daiquiri', ing: 'Ron blanco y zumo de limon o lima'},
      //{name:'Cosmopolitan', ing: 'Vodka, triple seco, zumo de lima y zumo de arandanos'},
      //{name:'Martini', ing: 'Ginebra y vermut seco'},
      //{name:'Long Island', ing: 'Vodka, tequila, ron blanco, triple seco, ginebra, zumo de limon, azcar y coca cola'},
      //{name:'Bloody Mary', ing: 'Vodka, zumo de tomate, zumo de limon, tabasco, salsa Worcestershire, sal, pimienta y hielo '},
      //{name:'Sex on the beach', ing: 'Vodka, licor de melocotón, zumo de naranza y zumo de arandanos'},
      //{name:'Mai Tai', ing: 'Ron añejo, ron blanco, triple seco, zumo de lima, amaretto, azúcar y hielo'},
      //{name:'Negroni', ing: 'Vermut rojo, Campari y vermut'},
      //{name:'Rusty Nail', ing: 'Whisky escoces y licor drambuie'},
      //{name:'Sidecar', ing: 'Cognac o brandy, triple seco y zumo de limon'},
      //{name:'Coco loco', ing: 'Vodka, tequila, ron blanco, zumo de limon, crema de coco y hielo'},
      //{name:'Tom Collins', ing: 'Ginebra, almibar o azúcar, zumo de limon, soda y hielo'},
      //{name:'Black Russian', ing: 'Vodka y licor de cafe'},
      //{name:'White Russian', ing: 'Vodka, licor de cafe y nata fresca o leche condensada'},
      //{name:'Fernet con cola', ing: 'Fernet, bebida de cola, limon y hielo'},
      //{name:'Fernet Menta ', ing: 'Branca Menta, sprite, limon'},
      //{name:'Gancia Batid0', ing: 'Gancia, jugo de limón, azucar, limon'},
      //{name:'Caipiroska ', ing: 'Vodka, lima, almibar simple, gaseosa pomelo, pomelo rosado'},
      //{name:'Whiscola', ing: 'Whisky, coca cola, hielo'},
      //{name:'Caipirisima', ing:'Ron, lima , jarabe de goma, rodaja de lima, hielo'},
      //{name:'Cuba Libre', ing: 'Ron, coca cola. jugo de limon, rodaja de limon, hielo'},
      //{name:'Daiquiri de frutilla', ing: 'Ron, licor de frutilla, azucar, frutillas, hielo, rodaja de limon'},
      //{name:'Daiquiri de ananá', ing: 'Ron, licor de anana, azucar,hielo, rodaja de limon '},
      //{name:'Daiquiri de durazno', ing: 'Ron, licor de duraznos, duraznos, azucar, rodaja de limon y hielo'},
      //{name:'Mojito Maracuya', ing: 'Ron, jugo de limon, hojas de menta, azucar, soda, pulpa de maracuya, hielo'},
      //{name:'Mojito Mango', ing: 'Ron, jugo de limon, hojas de menta, azucar, soda, pulpa de mango y hielo'},
      //{name:'Electric Lemonade', ing: 'Vodka, blue curacao, sour mix, sprite, rodaja de limon y hielo'},
      //{name:'Tequila Sunrise', ing: 'Tequila, jugo de naranja, gotas de granadina, hielo y rodaja de naranja'},
      //{name:'Margarita Blue ', ing: 'Tequila. Blue Curacao, jugo de lima, rodaja de limon'},
      //{name:'Destornillador', ing: 'Vodka, jugo de naranja, rodaja de naranja, hielo'},

   //],

   tragoseleccionado: null,
   tragoeditar:null,
   filterField: '',
   selecciono:false,
   noselecciono:true,
  },

  async created() {
    await this.getRol();
    this.obtenerTragos();
    this.gettrago();
    this.obtenerTragosProp();
  },

  

  methods:{
      async getRol(){
        await apiClient
          .get("getUser", {headers: {"Authorization": "Bearer "+localStorage.token}})
          .then(response =>{
            this.rol=response.data.role  
            response.data.role == "admin" ? this.cAdmin = true : this.cAdmin = false         
          })
          .catch(error => console.log(error))
          console.log(this.rol)
      },

      gettrago() {
        this.trago=this.$route;
        console.log(this.trago);
      },

      filter(trago){
          console.log(trago.ingredientes+" "+this.filterField)
          return trago.ingredientes.toLocaleLowerCase().includes(this.filterField.toLocaleLowerCase()) ||
          trago.nombre.toLocaleLowerCase().includes(this.filterField.toLocaleLowerCase())
      },

    
      deletetrago(item) {
        const index = this.tragos.indexOf(item);
        confirm("Quieres eliminar este Trago?") &&
        apiClient.delete("/deletetrago/"+item._id).then(() => {
          this.tragos.splice(index, 1);
        });
      },

      rechazartrago(item) {
        const index = this.tragos.indexOf(item);
        confirm("Quieres rechazar este Trago?") &&
        apiClient.delete("/deletetragoP/"+item._id).then(() => {
          this.tragosP.splice(index, 1);
          location.reload();
        });
      },
      
      editartrago(trago) {
        this.tragoeditar=trago
        console.log(this.tragoeditar)
      },

      cargartrago() {
        const fd = new FormData();
        fd.append('id', this.tragoeditar._id);
        fd.append('nombre', this.tragoeditar.nombre);
        fd.append('ingredientes', this.tragoeditar.ingredientes);
        fd.append('graduacion', this.tragoeditar.graduacion);
          return apiClient.put("/editartrago", fd).then(()=>{
            Object.assign(this.tragos[this.tragos.indexOf(this.tragoeditar)], this.tragoeditar);
            this.tragoeditar=null
          })
      },

      aceptartrago(trago) {
        const fd = new FormData();
        fd.append('id', trago._id);
        fd.append('nombre', trago.nombre);
        fd.append('ingredientes', trago.ingredientes);
        fd.append('preparacion', trago.preparacion);
        fd.append('graduacion', trago.graduacion);
        fd.append('path', trago.path)
        apiClient.post("/agregartragoP", fd)
        location.reload();
      },


      obtenerTragos(){
        fetch('/api/tragos')
          .then(res => res.json())
          .then( data => {
            this.tragos = data;
            console.log(this.tragos);
          })
          .catch(err=>console.log(err))
      },

      obtenerTragosProp() {
        apiClient
          .get("/obtenerPropuestos", {headers: {"Authorization": "Bearer "+localStorage.token}})
          .then((response) => (this.tragosP = response.data));
      },

      seleccionartrago(trago){
        console.log(trago)
        this.selecciono=true
        this.noselecciono=false
        this.tragoseleccionado=trago
      },
      deseleccionartrago(){
        this.selecciono=false
        this.noselecciono=true
        this.tragoseleccionado=null
      },
    
      isAdmin(){
        return this.role=="admin" ? true : false
      },

      nohaytragos(){
        return this.tragosP.length == 0 ? true : false
      }
  }

  
})
