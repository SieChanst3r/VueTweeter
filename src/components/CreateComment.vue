<template>
    <div id="comment-container">
        <textarea type="text" id="comment" v-model="commentContent"></textarea>
        <button @click="createComment">Post</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "create-comment",
        data() {
            return {
                userId: cookies.get("userId"),
                commentContent: ""
            };
        },
        props: {
            tweetId: Number
        },
        methods: {
            createComment: function() {
                axios.request({
                     method:"POST",
                    // url:"https://tweeterest.ml/api/comments",
                    url: "http://127.0.0.1:5000/api/comments",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        tweetId: this.tweetId,
                        content: this.commentContent
                    },
                }).then((response) => {
                    this.commentContent = "";
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
    }
</script>

<style scoped>

</style>