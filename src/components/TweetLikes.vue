<template>
    <div id="tweetlikes-container">
        <button @click="likeTweet(tweetId)" v-if="isLiked == false">Like</button>
        <button @click="unlikeTweet" v-else-if="isLiked == true">Unlike</button>
        <span></span>
        <div>
            Likes: {{ likesAmount }}
        </div>
        <span></span>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "tweet-likes",
        data() {
            return {
                likesNumber: [],
                isLiked: false,
                likesAmount: 0,
            };
        },
        props: {
            tweetId: Number
        },
        mounted: function() {
            this.retrieveLikes();
        },
        methods: {
            likeTweet: function(tweetId) {
                (this.isLiked = true),
                axios.request ({
                          method:"POST",
                    url:"https://tweeterest.ml/api/tweet-likes",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: tweetId,
                    }
                }).then((response) => {
                    this.likesAmount++;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            },
            retrieveLikes: function() {
                axios.request ({
                    method:"GET",
                    url:"https://tweeterest.ml/api/tweet-likes",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    params: {
                        tweetId: this.tweetId,
                    }
                }).then((response) => {
                    this.likesNumber = response.data;
                    this.likesAmount = this.likesNumber.length;
                    console.log(response);

                    let loggedUser = cookies.get('userId');
                    for (let i = 0; i < this.likesNumber.length; i++) {
                        if (loggedUser == this.likesNumber[i].userId){
                            this.isLiked = true;
                            return;
                        
                    }
                    }
                    
                }).catch((error) => {
                    console.log(error);
                })
            },
             unlikeTweet: function() {
            (this.isLiked = false),
            axios.request ({
                    method:"DELETE",
                    // url:"https://tweeterest.ml/api/tweet-likes",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
                    }
            }).then((response) =>{
                this.likesAmount --;
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>