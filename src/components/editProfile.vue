<template>
    <div id="edit-profile">
        <h3>Edit Profile</h3>
        <p>Update Email Address</p>
        <input type="email" id="email-update" v-model="email">
        <p>Update UserName</p>
        <input type="text" id="username-update" v-model="username">
        <p>Update Password</p>
        <input type="text" id="password-update" v-model="password">
        <p>Update Bio</p>
        <textarea type="text" id="bio-update" v-model="bio"></textarea>
        <p>Birthdate (yyyy-mm-dd)</p>
        <input type="text" id="birthdate-input" v-model="birthdate">
        <button id="update-button" @click="updateProfile">Update</button>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "edit-profile",
        data ()  {
            return {
                email:"",
                username:"",
                password:"",
                bio:"",
                birthdate:""
            }
        },
        methods: {
            updateProfile: function() {
                axios.request ({
                    method: "PATCH",
                    // url:"https://tweeterest.ml/api/users",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    },
                    data: {
                        loginToken: cookies.get("session"),
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthdate
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
    }
</script>

<style scoped>

</style>