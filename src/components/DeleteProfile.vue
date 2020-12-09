<template>
    <div>
        <h2>Delete Profile</h2>
        <h2>Please verify account with your password</h2>
        <input type="text" v-model="password">
        <button id="delete-button" @click="deleteProfile">Confirm and Delete</button>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"

    export default {
        name: "delete-profile",
        data () {
            return {
                username:"",
                password:""
            }
        },
        methods: {
            deleteProfile: function() {
                axios.request({
                    method:"DELETE",
                    // url:"https://tweeterest.ml/api/users",
                    url:"http://127.0.0.1:5000/api/users",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                      
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        password: this.password
                    }
                }).then((response) => {
                    console.log(response);
                    cookies.delete("session");
                    cookies.delete("userId");
                    this.$router.push("/home")
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>