<template>
    <div>

    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        name: "edit-tweet",
         data() {
            return {
                tweetContent: "",
                loginToken: "",
                tweetId: ""
            }
        },
         methods: {
            editTweet: function() {
                axios.request({
                    method:"PATCH",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        content: this.tweetContent,
                        tweetId: this.tweetId
                    },
                }).then((response) => {
                    console.log(reponse)
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    };
    
         

</script>

<style scoped>

</style>