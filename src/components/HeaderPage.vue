<template>
    <div class="topnav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Resturant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name: "HeaderPage",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>
<style>
.topnav {
    background-color: #333;
    overflow: hidden;
}
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 14px;
    margin: 4px;
}
.topnav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>