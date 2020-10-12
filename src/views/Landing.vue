<template>
    <div>
        <div id="header">
        <img src="../assets/QLogo.jpg" alt="Logo for tweeter Q image">
        <h4>Tweeter Q</h4>
        </div>
        <login-form id="login"/>
        <signup-form id="signup"/>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";

    export default {
        name: "landing-page",
        components: {
            LoginForm,
            SignupForm
            
        },
    }
</script>

<style scoped>
* {
    margin: 0;
    padding:0;
}
h4 {
    display: inline-block;
    justify-items: center;
    align-items: center;
    margin: 5px;
    font-family: 'Shadows Into Light', cursive;
}
#login {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 15px;
    padding: 5px;
}
#signup {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 15px;
    padding: 5px;
}
#header {
    border-bottom: 2px solid #7FB685;    
}
</style>