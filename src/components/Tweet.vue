<template>
    <div class="tweet-container">
        <h3> {{ tweetObject.username }} </h3>
        <p> {{ tweetObject.content }} </p>
        <h5 id="created-at"> {{ tweetObject.createdAt }} </h5>
        <div id="tweet-interact">
        <delete-tweet v-if="isOwned" :tweetId="tweetObject.tweetId"/>
        <comment :tweetId="tweetObject.tweetId"/>
        <tweet-likes :tweetId="tweetObject.tweetId"/>
        </div>
    </div>
</template>

<script>
import axios from "axios"
// import CreateTweet from "../components/CreateTweet.vue"
import DeleteTweet from "./DeleteTweet.vue"
import cookies from "vue-cookies"
import Comment from "./AllComStuff.vue"
import TweetLikes from "./TweetLikes.vue"

    export default {
        name: "view-tweets",
        props: {
            tweetObject: {
                type: Object,
                required: true
            } 
        },
        components: {
            DeleteTweet,
            Comment,
            TweetLikes
        },
        data() {
            return {
                tweets: [],
                isOwned: cookies.get('userId') == this.tweetObject.userId
            }
        },
        mounted: function() {
            this.getUserTweets();
        },
        methods: {
            getUserTweets: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/tweets",
                      headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    }
                }).then((response) => {
                    this.tweets = response.data;
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
        // components: {
        //     CreateTweet,
        // },
   
        // methods: {
        //     viewTweets: function() {
        //         axios.request ({
        //             method: "GET",
        //             url:"https://tweeterest.ml/api/tweets",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

        //             },
        //             params: {
        //                 // loginToken: cookies.get("session"),
        //                 userId: this.userId
        //             }
        //         }).then((response) => {
        //             this.tweets = response.data;
        //             console.log(response);
        //         }).catch((error) => {
        //             console.log(error);
        //         });
        //     }
        // },
        // //     viewAllTweets: function() {
        // //             axios.request ({
        // //             method: "GET",
        // //             url:"https://tweeterest.ml/api/tweets",
        // //             headers: {
        // //                 "Content-Type": "application/json",
        // //                 "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

        // //             },
        // //             
        // //         }).then((response) => {
        // //             this.tweets = response.data;
        // //             console.log(response);
        // //         }).catch((error) => {
        // //             console.log(error);
        // //         });
            }
    
</script>

<style scoped>
.tweet-container {
    margin:10px;
}
#created-at {
    color: #2D6A4F;
    font-size: 12px;
}
#tweet-interact {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>