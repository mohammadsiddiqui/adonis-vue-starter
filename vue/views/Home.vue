<template>
  <div>
    <h3>Home Page</h3>
    <br>
    Logged In User : {{user.name}}
    <br>
    <br>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: mapState(["user"]),
  methods: {
    logout() {
      this.$auth.destroyToken();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

