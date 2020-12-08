<template>
    <div>
        <div  id="edit-container">
        <textarea type="text" id="tweet-post" v-model="updatedContent"></textarea>
        <button @click="editTweet">Update</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        name: "edit-tweet",
         data() {
            return {
                updatedContent: "",
                loginToken: cookies.get('session'),
                userId: cookies.get('userId')
            };
        },
        props: {
            tweetId: {
                type: Number,
                required: true
            }
        },
         methods: {
            editTweet: function() {
                axios.request({
                    method:"PATCH",
                    // url:"https://tweeterest.ml/api/tweets",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        content: this.updatedContent,
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