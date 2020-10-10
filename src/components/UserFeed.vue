<template>
    <div>
        <user-feed/>
    </div>
</template>

<script>
import axios from "axios"

    export default {
        name: "user-feed",
        data() {
            return {
                tweets: []
            }
        },
        // components: {

        // },
        mounted: function() {
            this.getTweets();
            },      
            viewAllTweets: function() {
                    axios.request ({
                    method: "GET",
                    url:"https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"

                    },
                    // params: {
                    //     // loginToken: cookies.get("session"),
                    //     userId: this.userId
                    // }
                }).then((response) => {
                    this.tweets = response.data;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    
</script>

<style scoped>

</style>