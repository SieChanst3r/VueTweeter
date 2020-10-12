<template>
    <div id="navigation-container">
<router-link to="/user-feed"> <img src="../assets/QLogo.jpg" height="50px" alt="Tweeter QLogo image"></router-link>
<span></span>
<router-link class="btn" to="/user-profile"> Profile </router-link>
<router-link class="btn" to="/discover"> Discover </router-link>
<button class="btn">Logout</button>
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
#navigation-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    border-bottom: 2px solid #426A5A;
}

</style>