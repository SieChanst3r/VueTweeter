<template>
    <div id="navigation-container">
<router-link to="/user-feed"> <img src="../assets/QLogo.jpg" alt="Tweeter QLogo image"></router-link>
<span></span>
<router-link to="/user-profile"> Profile </router-link>
<router-link to="/discover"> Discover </router-link>
<h4 id="logout-btn">Logout</h4>
    </div>
</template>

<script>
import cookies from "vue-cookies"

    export default {
        name: "nav-bar",
        methods: {
            userLogout() {
                cookies.remove('session'),
                cookies.remove('userId'),
                this.$router.push("/landing")
            }
        },
    }
</script>

<style scoped>

</style>