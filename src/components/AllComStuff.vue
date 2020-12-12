<template>
    <div id="comments-container">
        <p>Comments: </p>
        <create-comment :tweetId="tweetId"/>
        <div id="com-btn" @click="displayCom">Display Comments</div>
        <div id="user-com" v-for="comment in comments" :key="comment.commentId">
            <h1 id="username"> {{ comment.username }} </h1>
            <p id="com-content"> {{ comment.content }} </p>
            <p>Created: {{ comment.createdAt }} </p>
            <like-comment :commentId="comment.commentId"/>
            <div>
            <edit-comment v-if="userId == comment.userId" :commentId="comment.commentId"/>
            <delete-comment v-if="userId == comment.userId" :commentId="comment.commentId"/>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import LikeComment from "./LikeComment.vue"
import EditComment from "./EditComment.vue"
import DeleteComment from "./DeleteComment.vue"
import CreateComment from "./CreateComment.vue"

    export default {
        name: "show-comments",
        components: {
            CreateComment,
            DeleteComment,
            EditComment,
            LikeComment,            
        },
        props: {
            tweetId: Number,
            
        },
        data() {
            return {
                comments: [],
                userId: cookies.get('userId')
            };
        },
        methods: {
            displayCom: function() {
                axios.request ({
                     method:"GET",
                    url:"http://127.0.0.1:5000/api/comments",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    params: {
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    this.comments = response.data;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
#comments-container {
    display: grid;
    justify-items: center;
    align-items: center;
}
#user-com {
    padding: 10px;
    border: 2px solid #426A5A;
}
#username {
    color: #EF6F6C;
}
#com-content {
    color: black;
}
</style>