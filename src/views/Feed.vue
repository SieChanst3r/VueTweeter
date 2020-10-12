<template>
    <div>
        <nav-bar/>
        <h1>Feed Page</h1>
        <create-tweet/>
        <button @click="viewAllTweets">Refresh</button>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"/>
            <user-feed/>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/Navigation.vue"
import axios from "axios"
import TweetCard from "../components/Tweet.vue"
import CreateTweet from "../components/CreateTweet.vue"
import UserFeed from "../components/UserFeed.vue"

    export default {
        name: "feed-page",
            data() {
                return {
                    tweets: []
                }
            },
            components: {
            CreateTweet,
            TweetCard,
            NavBar,
            UserFeed,
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

</style>