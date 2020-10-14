<template>
    <div id="comment-container">
        <textarea type="text" id="comment" v-model="commentContent"></textarea>

        <div id="comments">
            <h2 @click="createComment">Comment</h2>
        </div>

        <div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "tweet-comment",
        
    props: {
        tweetId: {
            type: Number,
            required: true 
        },
    },
    data() {
            return {
                comments: [],
                commentContent: "",
                editContent: "",
                userId: cookies.get('userId')
            };
        },
        methods: {
            createComment: function() {
                axios.request({
                    method:"POST",
                    url:"https://tweeterest.ml/api/comments",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        tweetId: this.tweetId,
                        content: this.CommentContent
                    },
      
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    
    showComments: function() {
        axios.request({
            method: "GET",
            url: "https://tweeterest.ml/api/comments",
            headers:{
                "Content-Type": "application/json",
                "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
            },
            params: {
                tweetId: this.tweetId
            }
        }).then((response) => {
            this.comments = response.data;
        }).catch((error) => {
            console.log('error');
        })
    }
}
</script>

<style scoped>

</style>