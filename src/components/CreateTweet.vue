<template>
    <div>
        <textarea v-model="tweetContent"></textarea>
        <button @click="createTweet">Submit</button>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"

    export default {
        name: "create-tweet",
        data() {
            return {
                tweetContent: ""
            }
        },
        methods: {
            createTweet: function() {
                axios.request({
                    method:"POST",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        content: this.tweetContent
                    },
      
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