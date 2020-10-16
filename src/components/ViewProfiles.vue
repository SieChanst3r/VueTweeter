<template>
    <div>
        <h2>View other Profiles</h2>
        <div id="show-tweets">
            <div id="profile-container" v-for="tweet in tweets" :key="tweet.tweetId">
            <h2 id="user"> {{ tweet.username }} </h2>
            <h3 id="tweet-content"> {{ tweet.content }} </h3>
            <p id="tweet-content">Created at: {{ tweet.createdAt }} </p>
            <tweet-likes :tweetId="tweet.tweetId"/>
            <div>
                <delete-tweet v-if="userId == tweet.userId" :tweetId="tweet.tweetId"/>
                <follow-users id="follow-btn"/>
            </div>
            <tweet-comment :tweetId="tweet.tweetId"/>
        </div>
        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
import TweetLikes from "../components/TweetLikes.vue"
import TweetComment from "../components/AllComStuff"
import FollowUsers from "../components/FollowBtn.vue"
import DeleteTweet from "../components/DeleteTweet.vue"

    export default {
        name: "view-profiles",
        components: {
            TweetLikes,
            TweetComment,
            FollowUsers,
            DeleteTweet
        },
        data() {
            return {
                tweets: [],
                userId: cookies.get('userId')
            };
        },
        mounted: function() {
            this.showTweets();
        },
        methods: {
            showTweets: function() {
                axios.request ({
                     method:"GET",
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
                })
            }
        },
    }
</script>

<style scoped>
#show-tweets {
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>