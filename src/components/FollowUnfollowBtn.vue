<template>
     <div id="follow-unfollow-btn">
    <button
      v-if="isFollowing == false"
      id="tweet-btn-unfollow"
      @click="followUser"
    />
    <button
      v-else-if="isFollowing == true"
      id="tweet-btn-follow"
      @click="unfollowUser"
    />
    <span></span>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

    export default {
        name: "follow-unfollow-btn",
        data() {
            return {
                isFollowing: false,
                usersFollowing: []
            };
        },
        props: {
            userId: Number
        },
        mounted: function() {
            this.checkFollowing();
        },
        methods: {
            followuser: function() {
                axios.request({
                    method: "POST",
                    url: "http://127.0.0.1:5000/api/follows",
                    header: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        followId: this.userId
                    }
                }).then(response => {
                    console.log(response);
                    this.isFollowing = false;
                }).catch(error => {
                    console.log(error);
                });
            },
            checkFollowing: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/follows",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        userId: cookies.get("userId")
                    }
                }).then((response) => {
                    console.log(response);
                    this.usersFollowing = response.data;

                    let currentUser = cookies.get("userId");
                    for (let i = 0; i < this.usersFollowing.length; i++) {
                        if (currentUser == this.usersFollowing[i].userId) {
                            this.isFollowing = true;
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            unfollowUser: function() {
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/follows",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        followId: this.userId
                    }
                }).then((response) =>{
                    console.log(response);
                    this.isFollowing = false;
                }).catch((error) =>{
                    console.log(error);
                });
            },
            // checkFollowing: function() {
            //     axios.request({
            //         method: "GET",
            //         url: "http://127.0.0.1:5000/api/follows",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         params: {
            //             userId: cookies.get("userId")
            //         }
            //     }).then((response) => {
            //         console.log(response)
            //         this.usersFollowing = response.data;

            //         let currentUser = cookies.get("userId");
            //         for (let i = 0; i < this.usersFollowing.length; i++) {
            //             if (currentUser == this.usersFollowing[i].userId) {
            //                 this.isFollowing = true;
            //             }
            //         }
            //     }).catch((error) => {
            //         console.log(error);
            //     })
            // }
        }
    }
</script>

<style scoped>
/* MOBILE */
#tweet-btn-unfollow, #tweet-btn-follow {
    align-items: center;
    justify-items: center;
    cursor: pointer;
    width: 55%;
    margin: 5vw;
    cursor: pointer;
    padding: 6px;
}

#tweet-btn-unfollow:hover, #tweet-btn-follow:hover {
    transform: scale(0.8);
}

#follow-unfollow-btn {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
}

/* TABLET */
@media only screen and (min-width: 672px) {
    #tweet-btn-unfollow, #tweet-btn-follow {
    align-items: center;
    justify-items: center;
    cursor: pointer;
    width: 90%;
    margin: 1vh;
}
#tweet-btn-follow:hover, #tweet-btn-unfollow:hover {
    transform: scale(0.8);
}
#follow-unfollow-btn {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
}
}

@media only screen and (min-width: 1025px) {
    #tweet-btn-unfollow, #tweet-btn-follow {
    align-items: center;
    justify-items: center;
    cursor: pointer;
    padding: 5px;
    width: 90%;
    margin: 1vh;
}
#tweet-btn-follow:hover, #tweet-btn-unfollow:hover {
    transform: scale(0.8);
}
#follow-unfollow-btn {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
}    
}

</style>