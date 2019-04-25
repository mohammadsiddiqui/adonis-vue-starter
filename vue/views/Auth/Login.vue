<template>
  <div style="width: 300px; margin:auto;  background:#fff; ">
    <div style="padding:15px; background:#ccc; text-align:center; font-size:20px;">Login</div>
    <div style="padding: 20px 20px;">
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
      <button @click="doLogin" style="padding:5px 25px;">Login</button>
      <br>
      <br>
      <router-link tag="a" to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    user: { email: "", password: "" }
  }),

  mounted() {},

  methods: {
    async doLogin() {
      try {
        const { data } = await this.$http.post(`/auth/login`, this.user);
        this.$auth.setToken(data.token);
        const res = await this.$http.get(`/auth/user`);
        this.$store.commit("SET_USER", res.data);
        this.$router.push({ path: "/" });
      } catch (error) {
        alert("verify your credentials");
      }
    }
  }
};
</script>