<template>
    <div id="delete-comment">
        <button @click="deleteComment">Delete</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "delete-comment",
        props: {
            commentId: Number,
        },
        methods: {
            deleteComment: function() {
                axios.request ({
                     method:"DELETE",
                    // url:"https://tweeterest.ml/api/comments",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                    }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>