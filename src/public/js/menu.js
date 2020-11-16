const apiClient2 = axios.create({
    baseURL: '',
    withCredentials: false, // This is the default
  });
const menu = new Vue({
    el: '#menu',
    data: {
        logueado: null
    },
    created(){
        this.getLog()
    },
    methods:{
        async getLog(){
            await apiClient2
              .get("getUser", {headers: {"Authorization": "Bearer "+localStorage.token}})
              .then(response =>{
                response.data.role == "admin" ? this.logueado = true : this.logueado = false         
              })
              .catch(error => {
                  console.log(error); 
                  this.logueado = false 
                })
          },
          logout(){
              localStorage.token = null;
              location.reload();
          }
    }

})