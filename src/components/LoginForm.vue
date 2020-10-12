<template>
    <div>
        <h1>PLEASE LOGIN</h1>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <button class="btn" @click="loginUser">Login</button>
        <h3> {{ loginStatus }} </h3>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "LOADING..."
                axios.request({
                     method: "POST",
                    url: "https://tweeterest.ml/api/login",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                            email: this.email,
                            password: this.password
                    }
                }).then((response) => {
                    //CHECK IF LOGIN TOKEN SENT
                    console.log(response)
                    this.loginStatus = "Success"
                    cookies.set('session', response.data.loginToken)
                    cookies.set('userId', response.data.userId)
                     this.$router.push("/feed")
                    
                    this.$router.push("/profile")
                }).catch((error) => {
                    //SHOW USER LOGIN FAILURE
                    console.log(error)
                    this.loginStatus = "Error"
                })
            }
        },
    }
</script>

<style lang="scss">
.btn {
  background-color:#426A5A; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>