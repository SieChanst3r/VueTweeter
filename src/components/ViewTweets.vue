<template>
    <div>
        <create-tweet/>
    <div v-for="tweet in tweets" :key="tweet.tweetId">

    </div>
    </div>
</template>

<script>
import axios from "axios"
// import cookies from "vue-cookies"
import CreateTweet from "../components/CreateTweet.vue"


    export default {
        name: "view-tweets",
        props: {
            tweetObject: {
                type: Object,
                required: true
            } 
        },
        components: {
            CreateTweet,
        },
   
        methods: {
            viewTweets: function() {
                axios.request ({
                    method: "GET",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    },
                    params: {
                        // loginToken: cookies.get("session"),
                        userId: this.userId
                    }
                }).then((response) => {
                    this.tweets = response.data;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
        //     viewAllTweets: function() {
        //             axios.request ({
        //             method: "GET",
        //             url:"https://tweeterest.ml/api/tweets",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

        //             },
        //             // params: {
        //             //     // loginToken: cookies.get("session"),
        //             //     userId: this.userId
        //             // }
        //         }).then((response) => {
        //             this.tweets = response.data;
        //             console.log(response);
        //         }).catch((error) => {
        //             console.log(error);
        //         });
            }
    
</script>

<style scoped>

</style>