<template>
    <div id="patch-comment">
        <textarea type="text" id="edit-comment" v-model="updatedComment"></textarea>
        <button @click="editComment">Update</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "edit-comment",
        data() {
            return {
                loginToken: cookies.get("session"),
                updatedComment: "",
            };
        },
        props: {
            commentId: Number,
        },
        methods: {
            editComment: function() {
                axios.request({
                     method:"PATCH",
                    // url:"https://tweeterest.ml/api/comments",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                        content: this.updatedComment
                    }
                }).then((response) => {
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