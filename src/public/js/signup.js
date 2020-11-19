const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
  });
const app = new Vue({
    el: '#app4',
    data: {
        email:"",
        contraseña:""
    },
    methods:{
        validar: function() {
            var texto = $("#email").val();
        },
        async login() {
            console.log(this.email, this.contraseña);
            const fd = new FormData();
            fd.append('email', this.email);
            fd.append('password', this.contraseña);
            apiClient.post("/users/signin", fd)
            .then(response => {
                localStorage.token = response.data.token 
                window.location.href = "http://localhost:3000/";
              
            })
            .catch(error => {
              if(error.response.status == 404){
                alert(error.response.data.message)
              }})
          }
    }

})