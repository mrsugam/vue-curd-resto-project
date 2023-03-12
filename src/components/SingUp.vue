<template>
    <img class="logo" src="../assets/resto-logo.png"  alt="logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp"> Sign Up</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
       async signUp() {
          //  console.warn("SignUp Clicked", this.name, this.email, this.password);
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.log(result);
            if(result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push('/'); 
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push('/'); 
        }
    }
}
</script>