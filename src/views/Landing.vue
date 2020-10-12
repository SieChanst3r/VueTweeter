<template>
    <div>
        <nav-bar/>
        <login-form/>
        <signup-form/>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import NavBar from "../components/Navigation.vue";

    export default {
        name: "landing-page",
        components: {
            LoginForm,
            SignupForm,
            NavBar
        },
    }
</script>

<style scoped>

</style>