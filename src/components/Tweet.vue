<template>
    <div class="tweet-container">
        <h3> {{ tweetObject.username }} </h3>
        <p> {{ tweetObject.content }} </p>
        <h5> {{ tweetObject.createdAt }} </h5>
        <delete-tweet v-if="isOwned" :tweetId="tweetObject.tweetId"/>
    
    </div>
</template>

<script>
// import axios from "axios"
// import CreateTweet from "../components/CreateTweet.vue"
import DeleteTweet from "./DeleteTweet.vue"
import cookies from "vue-cookies"

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
        },
        data() {
            return {
                isOwned: cookies.get('userId') == this.tweetObject.userId
            }
        },
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
</style>