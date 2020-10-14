<template>
    <div id="navigation-container">
<router-link to="/feed"> <img id="QLogo" src="../assets/QLogo2.png" height="60px" alt="Tweeter QLogo image"></router-link>
<router-link class="btn" to="/profile"> Profile </router-link>
<router-link class="btn" to="/discover"> Discover </router-link>
<button id="logout" class="btn" @click="userLogout">Logout</button>
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
                this.$router.push("/")
            }
        },
    }
</script>

<style scoped>

#navigation-container {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-bottom: 2px solid #426A5A;
    background-color: #7FB685;
    width: 100%;
}
#QLogo {
    margin:0;
    padding: 0;
}

</style>