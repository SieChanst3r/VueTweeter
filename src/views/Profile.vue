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
        
        <delete-profile/>
        </div>
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
import axios from "axios"

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
                tweets: []
            }
        },
        // mounted: function() {
        //     this.getTweets();
        //     },      
            getTweets: function() {
                    axios.request ({
                    method: "GET",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    },
                    params: {
                        loginToken: cookies.get("session"),
                        userId: this.userId
                    }
                }).then((response) => {
                    this.tweets = response.data;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            },        
    };
</script>

<style scoped>
#tweet-content {
    display: grid;
    justify-items: center;
    align-items: center;
    min-height: 80vh;
}
</style>