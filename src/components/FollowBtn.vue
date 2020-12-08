<template>
    <div id="follow-btn">
        <button id="follow-btn" @click="followUser" v-if="isFollowing == false">Follow</button>
        <button id="unfollow-btn" @click="unfollowUser" v-else-if="isFollowing == true">Unfollow</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "follow-btn",
        data() {
            return {
                loginToken: cookies.get('session'),
                userId: cookies.get('userId'),
                isFollowing: false,
                usersFollowing: []
            };
        },
        mounted: function() {
            this.seeFollowers();
        },
        methods: {
            followUser: function() {
                this.isFollowing = true;
                axios.request ({
                     method:"POST",
                    url:"https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        followId: this.userId,
                    }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            },
            unfollowUser: function() {
                this.isFollowing = false;
                axios.request ({
                     method:"DELETE",
                    url:"https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        followId: this.userId,
                    }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            },
             seeFollowers: function() {
            axios.request ({
                 method:"GET",
                    // url:"https://tweeterest.ml/api/followers",
                    url:"127.0.0.1:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "3r0Pca4BgUs9YgXbtTduHwjxmzEa7eIxtBbddHoM9B02g"
                    },
                    params: {
                        userId: this.userId
                    }
            }).then((response) => {
                this.usersFollowing = response.data;
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        },
       
    };
</script>

<style lang="scss" scoped>

</style>