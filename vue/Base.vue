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
