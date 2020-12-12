<template>
    <div id="comlikes-container">
        <button @click="likeComment" v-if="isLiked == false">Like</button>
        <button @click="unlikeCom" v-else-if="isLiked == true">Unlike</button>
        <div>Likes: {{ likesAmount }} </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "like-comments",
        data() {
            return {
                likesNumber: [],
                isLiked: false,
                likesAmount: 0,
            }
        },
            props: {
                commentId: Number
            },
            mounted: function () {
                this.GetComLikes();
            },
            methods: {
                likeComment: function() {
                    (this.isLiked = true),
                    axios.request ({
                         method:"POST",
                    // url:"https://tweeterest.ml/api/comment-likes",
                    url:"http://127.0.0.1:5000/api/comment-likes",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                    }
                    }).then((response) => {
                        this.likesAmount++;
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    });
                },
                GetComLikes: function() {
                    axios.request ({
                         method:"GET",
                    // url:"https://tweeterest.ml/api/tweets",
                    url:"http://127.0.0.1:5000/api/comment-likes",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    params: {
                        commentId: this.commentId,
                    },
                    }).then((response) => {
                        this.likesNumber = response.data;
                        this.comLikesAmount = this.likesNumber.length;
                        console.log(response);

                        let loggedUser = cookies.get('userId');
                        for (let i = 0; i < this.likesNumber.length; i++){
                            if (loggedUser == this.likesNumber[i].userId){
                                this.isLiked = true;
                                return;
                            }
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                },
                unlikeCom: function() {
                    (this.isLiked = false),
                    axios.request ({
                         method:"DELETE",
                    // url:"https://tweeterest.ml/api/tweets",
                    url:"http://127.0.0.1:5000/api/comment-likes",
                    headers: {
                        "Content-Type": "application/json",
                        // "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                    }
                    }).then((response) => {
                        this.likesAmount--;
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    });
                }
            }
        
    }
</script>

<style lang="scss" scoped>

</style>