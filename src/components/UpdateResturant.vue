<template>
    <HeaderPage />
    <h1>Hello User, Welcome on Update Resturant Page</h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" name="name">
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address">
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact">
        <button type="button" v-on:click="updateRestaurant">Update Resturant</button>
    </form>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name: "UpdateResturant",
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
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push('/sign-up'); 
        }
        let id = this.$route.params.id;
        const result = await axios.get("http://localhost:3000/restaurant/"+id)
        this.restaurant = result.data;
    },
    methods: {
       async updateRestaurant() {
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.log(result);
            if(result.status == 200) {
                this.$router.push('/'); 
            }
        }
    }
}
</script>