<template>
    <div id="footer-container">
        <h4>QUEERTR</h4>
        <h4>Copyright 2020</h4>
        <h4>By Sie Chan</h4>
    </div>
</template>

<script>
    export default {
        name: "page-footer",
    }
</script>

<style scoped>
#footer-container {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 10vh;
    background-color: #7FB685;
    border-top: 2px solid #426A5A;
}
h4 {
    align-items: center;
    justify-items: center;
    padding: 5px;
    /* margin-top: 9vh;
    margin-bottom: 5vh; */
    font-size: 10px;
}
</style>