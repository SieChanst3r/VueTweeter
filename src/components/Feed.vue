<template>
    <div>
        <h2>WELCOME TO YOU QUEERTR FEED</h2>
        <create-tweet/>
        <div id="btn-container">
            <button class="show-following-users-tweets-btn" @click="showFollowingTweets"> 
            VIEW QUEERTR POSTS               
             </button>

        </div>
    </div>
</template>

<script>
import CreateTweet from "../components/CreateTweet.vue";
import AllComStuff from "../components/AllComStuff.vue";


    export default {
        name: "following-tweets",
        components: {
            CreateTweet,
            AllComStuff,
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