<template>
    <div id="x">
        <div v-if="loginToken != undefined">
        <nav-bar/>
        <div id="container">
        <h1>Feed Page</h1>
        <create-tweet/>
        <button @click="viewAllTweets()">Refresh</button>

        <!-- <user-feed :tweetId="tweet.tweetId"/> -->
        <div id="tweets" v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"/>
        </div>
        </div>
        </div>
        <footer-comp/>
    </div>
</template>

<script>
import NavBar from "../components/Navigation.vue"
import axios from "axios"
import cookies from "vue-cookies"
import TweetCard from "../components/Tweet.vue"
import CreateTweet from "../components/CreateTweet.vue"
import FooterComp from "../components/Footer.vue"
// import Comment from "../components/AllComStuff.vue"
// import UserFeed from "../components/UserFeed.vue"

    export default {
        name: "feed-page",
            data() {
                return {
                    tweets: [],
                    loginToken: cookies.get('session'),
                    userId: cookies.get('userId')
                }
            },
            components: {
            CreateTweet,
            TweetCard,
            NavBar,
            FooterComp,
            // UserFeed,
            // Comment,
        },
        mounted: function() {
            this.viewAllTweets()
        },
        methods: {
             viewAllTweets: function() {
             axios.request ({
             method: "GET",
                  url:"https://tweeterest.ml/api/tweets",
                  headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    },
                    
             }).then((response) => {
                    this.tweets = response.data;
                    console.log(response);
            }).catch((error) => {
                    console.log(error);
            });
    }
        }
    }         
</script>

<style scoped>
#container {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;

}
 #tweets {
    display: grid;
    justify-items: center; 
    align-items: center; 
    font-size: 25px;
    border: 3px solid #426A5A;
    width: 100%;
    margin: 15px; 
    padding: 10px; 
    background-color:#D8F3DC;  
    
} 
/* #x {
    /* background-color: #; 
} */

</style>