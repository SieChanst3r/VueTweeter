<template>
    <div>
        <div v-if="loginToken != undefined">
        <nav-bar/>
        <div id="tweet-content">
        <edit-profile/>
         <create-tweet/>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"/>
            <user-tweets/>
        </div>
        <delete-profile/>
        </div>
        <footer-page/>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/Navigation.vue"
import CreateTweet from "../components/CreateTweet.vue"
import EditProfile from "../components/EditProfile.vue"
import TweetCard from "../components/Tweet.vue"
import cookies from "vue-cookies"
import FooterPage from "../components/Footer.vue"
import DeleteProfile from "../components/DeleteProfile.vue"
import UserTweets from "../components/Tweet.vue"

    export default {
        name: "profile-page",
        components: {
            NavBar,
            CreateTweet,
            TweetCard,
            FooterPage,
            EditProfile,
            DeleteProfile,
            UserTweets
        },
        data() {
            return {
                loginToken: cookies.get('session'),
                tweets: ""

            };
        },
        // params: {
        //     tweets: this.userId
        // }
        
    };
</script>

<style scoped>
#tweet-content {
    display: grid;
    justify-items: center;
    align-items: center;
    height: 80vh;
}
</style>