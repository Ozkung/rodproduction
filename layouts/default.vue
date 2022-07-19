<template>
  <v-app light>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
}
.footerProduction {
  background: yellow;
  margin-top: 200px;
  width: 100%;
  height: 200px;
}
</style>
