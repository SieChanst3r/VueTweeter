<template>
    <div>
        <button @click="deleteTweet">Delete</button>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "delete-tweet",
        props: {
            tweetId: {
                type: Number,
                required: true
            }
        },
        methods: {
            deleteTweet: function() {
                axios.request({
                    // url: "https://tweeterest.ml/api/tweets",
                    url:"http://127.0.0.1:5000/api/tweets",
                    method: "DELETE",
                     headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"), 
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>