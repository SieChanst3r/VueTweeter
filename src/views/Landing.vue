<template>
    <div>
        <div id="header">
        <img src="../assets/QLogo2.png" height="60px" alt="Logo for QUEERTR image">
        <h4>QUEERTR</h4>
        </div>
        <login-form id="login"/>
        <signup-form id="signup"/>
        <footer-comp/>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import FooterComp from "../components/Footer.vue";

    export default {
        name: "landing-page",
        components: {
            LoginForm,
            SignupForm,
            FooterComp,            
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
    padding-left: 20%;
    justify-items: center;
    align-items: center;
    margin: 5px;
    font-family: 'Shadows Into Light', cursive;
}
#login {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 100px;
    padding: 10px;
}
#signup {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 100px;
    padding: 10px;
}
#header {
    border-bottom: 2px solid #426A5A;  
    background-color: #7FB685;  
}
</style>