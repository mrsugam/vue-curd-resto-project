<template>
    <HeaderPage />
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table border="1">
        <tr>
            <td>Sr. No</td>
            <td>Name</td>
            <td>Address</td>
            <td>contact</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <router-link :to="'/update-restaurant/'+item.id">Update</router-link>
                <button v-on:click="deleteRestauran(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
    HeaderPage
},
methods: {
   async deleteRestauran(id) {
        let result = await axios.delete("http://localhost:3000/restaurant/"+id);
        if(result.status == 200) {
            this.loadRestaurant();
        }
    },
    async loadRestaurant() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user) {
            this.$router.push('/sign-up'); 
        }
        let result = await axios.get("http://localhost:3000/restaurant");
       // console.log(result);
        this.restaurants = result.data;
    }
},
    mounted() {
        this.loadRestaurant();
    }
}
</script>
<style>
td{
    width: 160px;
    height: 40px;
}
</style>