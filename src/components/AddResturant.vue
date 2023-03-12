<template>
    <HeaderPage />
    <h1>Hello User, Welcome on Add Resturant Page</h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="addRestaurant">Add Resturant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "AddResturant",
    components: {
        HeaderPage,
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.log(result);
            if(result.status == 201) {
                this.$router.push('/'); 
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push('/sign-up'); 
        }
    }
}
</script>
