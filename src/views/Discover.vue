<template>
    <div id="discover">
        <div v-if="loginToken != undefined">
        <nav-bar/>
        </div>
        <h3>Discover QUEERTR</h3>
        <span/>
        <div id="users">
            <view-users id="show-tweets" :tweetId="tweet.tweetId"/>
        </div>
        <br/>
        <footer-comp/>
    </div>
</template>

<script>
import NavBar from "../components/Navigation.vue"
import FooterComp from "../components/Footer.vue"
import ViewUsers from "../components/ViewProfiles.vue"
import cookies from "vue-cookies"

    export default {
        components: {
            NavBar,
            FooterComp,
            ViewUsers
        },
        data() {
            return {
                loginToken: cookies.get('session'),
                username: cookies.get('userId'),
                tweet: ""
            };
        }
    };
</script>

<style scoped>
#users {
    display: grid;
    justify-items: center;
    align-items: center;
    height: 80vh;
}
#show-tweets {
    margin: 2.5vh;
    color: black;
}
h3 {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
}
</style>