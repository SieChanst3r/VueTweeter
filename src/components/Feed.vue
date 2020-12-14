<template>
    <div>
        <h2>WELCOME TO YOU QUEERTR FEED</h2>
        <create-tweet/>
        <div id="btn-container">
            <button class="show-following-users-tweets-btn" @click="showFollowingTweets"> 
                VIEW QUEERTR POSTS               
             </button>
             <button class="show-following-users-tweets-btn" @click="showCurrentUserPosts"> 
                VIEW YOUR POSTS 
             </button>
        <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
            <h2 class="user">
                <strong> {{ tweet.username }}
            </h2>
            <p>Created at: {{ tweet.createdAt }}</p>
            <tweet-likes :tweetId="tweet.tweetId" />
            <div>
                <delete-tweet class="delete-btn"
                    v-if="userId == tweet.userId" :tweetId="tweet.tweetId"
                />
                <follow-unfollow-btn class="follow-btn" />
                <span/>
                <span />                
            </div>
            <update-tweet v-if="userId == tweet.userId" :tweetId="tweet.tweetId" />
            <span />
            <all-com-stuff :tweetId="tweet.tweetId" />

        </div>

        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import CreateTweet from "../components/CreateTweet.vue";
import AllComStuff from "../components/AllComStuff.vue";
import TweetLikes from "../components/TweetLikes.vue";
import DeleteTweet from "../components/DeleteTweet.vue";
import FollowUnfollowBtn from "../components/FollowUnfollowBtn";
import FollowUnfollowBtn from './FollowUnfollowBtn.vue';
import UpdateTweet from "../components/EditTweet.vue";


    export default {
        name: "following-tweets",
        components: {
            CreateTweet,
            AllComStuff,
            TweetLikes,
            DeleteTweet,
            FollowUnfollowBtn,
            UpdateTweet,
        },
        data() {
            return {
                loginToken: cookies.get("session"),
                follows: [],
                userId: cookies.get("userId"),
                tweets: [],
            };
        },
        methods: {
            showCurrentUserPosts: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/tweets",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        userId: this.userId
                    }
                }).then((response) => {
                    this.tweets = response.data;
                    console.log(respnose);                    
                }).catch((error) => {
                    console.log(error);
                });
            },
            showFollowingTweets: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/tweets",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        userId: this.userId
                    }
                }).then((response) => {
                    this.follows = response.data;
                    this.tweets = [];
                    for (let i = 0; i < this.follows.length; i++) {
                        axios.request({
                            method: "GET",
                            url: "http://127.0.0.1:5000/api/tweets",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            params: {
                                userId: this.follows[i].userId
                            }
                        }).then((response) => {
                            this.tweets = this.tweets.concat(response.data);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            checkFollowers: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/follows",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        userId: cookies.get("userId")
                    }
                }).then((response) => {
                    console.log(response);
                    this.users = response.data;
                }).catch((error) => {
                    console.log(error);
                })
            },
            mounted: function() {
                this.showFollowingTweets();
            }
        }
    };
</script>

<style scoped>

</style>