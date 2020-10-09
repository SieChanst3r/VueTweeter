<template>
    <div>
        <create-tweet/>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import CreateTweet from "../components/CreateTweet.vue"

    export default {
        name: "view-tweets",
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
                    data: {
                        loginToken: cookies.get("session"),
                        userId: this.userId
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>