<template>
  <div style="width: 300px; margin:auto;  background:#fff; ">
    <div style="padding:15px; background:#ccc; text-align:center; font-size:20px;">Register</div>
    <div style="padding: 20px 20px;">
      <label>Name</label>
      <br>
      <input v-model="user.name" required>
      <br>
      <br>
      <label>Email</label>
      <br>
      <input v-model="user.email" required>
      <br>
      <br>
      <label>Password</label>
      <br>
      <input type="password" v-model="user.password" required>
      <br>
      <br>
      <button @click="doRegister" style="padding:5px 25px;">Register</button>
      <br>
      <br>
      <router-link tag="a" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    user: { name: "", email: "", password: "" }
  }),

  mounted() {},

  methods: {
    async doLogin() {
      try {
        const { data } = await this.$http.post(`/auth/login`, this.user);
        this.$auth.setToken(data.token);
        this.$router.push({ path: "/" });
      } catch (error) {
        alert("Error on create user");
      }
    },

    async doRegister() {
      try {
        const { data } = await this.$http.post(`/auth/register`, this.user);
        this.$store.commit("SET_USER", data);
        this.doLogin();
      } catch (error) {
        alert("verify your credentials");
      }
    }
  }
};
</script>