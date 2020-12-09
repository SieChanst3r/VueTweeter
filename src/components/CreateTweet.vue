<template>
    <div>
        <div id="tweet-container">
        <h4>What is on your mind?</h4>
        <h4> {{ tweetStatus }} </h4>
        <textarea v-model="tweetContent"></textarea>
        <button @click="createTweet()">Submit</button>
        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"

    export default {
        name: "create-tweet",
        data() {
            return {
                tweetContent: "",
                tweetStatus: "Tweet!"
            }
        },
        methods: {
            createTweet: function() {
                this.tweetStatus = "Tweeting!"
                axios.request({
                    method:"POST",
                    // url:"https://tweeterest.ml/api/tweets",
                    url:"http://127.0.0.1:5000/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        content: this.tweetContent
                    },
      
                }).then((response) => {
                    console.log(response)
                    this.tweetStatus = "Tweeted!"
                }).catch((error) => {
                    console.log(error)
                    this.tweetStatus = "Failed to Post"
                })
            }
        },
    }
</script>

<style scoped>

</style>