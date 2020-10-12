<template>
    <div id="profile-content">
        <nav-bar/>
        <h2>THIS IS YOUR PROFILE</h2>
    </div>
</template>

<script>
// import cookies from "vue-cookies"
// import axios from "axios"
import NavBar from "../components/Navigation.vue"

    export default {
        name: "user-profile",
        components: {
            NavBar,
        },
    }
</script>

<style scoped>
 #profile-content{
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>