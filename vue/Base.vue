<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  async mounted() {
    const { data } = await this.$http.get(`/auth/user`);
    this.$store.commit("SET_USER", data);
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

