<template>
    <div>
        <nav-bar/>
         <create-tweet/>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"/>
        </div>
    </div>
</template>

<script>
import NavBar from "../components/Navigation.vue"
import CreateTweet from "../components/CreateTweet.vue"
import TweetCard from "../components/Tweet.vue"

    export default {
        name: "profile-page",
        components: {
            NavBar,
            CreateTweet,
            TweetCard,

        },
        
    };
</script>

<style scoped>
#tweet-content {
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>