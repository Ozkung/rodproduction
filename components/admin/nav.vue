<template>
  <div class="nav_wrapper">
    <div v-for="(item, index) in menu" :key="index" :class="item.css">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'home', css: 'menu' },
        { name: 'about', css: 'menu' },
        { name: 'services', css: 'menu' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav_wrapper {
  width: 100%;
  height: 64px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu {
    color: #fff;
    padding: 18px 16px;
    width: 100px;
    text-align: center;
  }
}
</style>
