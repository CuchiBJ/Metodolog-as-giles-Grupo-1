const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
  });
  const app = new Vue({
    el: '#app5',
    data: {
      rol:null,
    },
  
    async created() {
      await this.getRol();
    },
  
    methods:{
        async getRol(){
          await apiClient
            .get("getUser", {headers: {"Authorization": "Bearer "+localStorage.token}})
            .then(response =>{
              this.rol=response.data.role
              
            })
            .catch(error => console.log(error))
            console.log(this.rol)
        },
      
        isAdmin(){
        console.log("entro")
          return this.role=="admin" ? true : false
        }
    }
  
  })