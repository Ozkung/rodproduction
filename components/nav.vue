<template>
  <div class="nav_main">
    <div class="logoTitle cursorP">Logo</div>
    <div class="uncheck">
      <div class="pr-5 cursorP">HOME</div>
      <div class="pr-5 cursorP">SHOWREEL</div>
      <div class="pr-5 cursorP">SERVICES</div>
      <div class="pr-5 cursorP">CONTACT</div>
    </div>
    <div v-if="windowWidth < 780" class="mx-3">
      <v-app-bar-nav-icon @click.stop="trickMenu()"></v-app-bar-nav-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      windowWidth: window.innerWidth,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    trickMenu() {
      this.drawer = true
      this.$emit('trick', true)
    },
    closeMenu(item) {
      this.drawer = item
    },
  },
}
</script>
<style scoped>
.nav_main {
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 5px black;
  padding-right: 100px;
  position: fixed;
  z-index: 3;
  width: 100%;
}
.cursorP {
  user-select: none;
  cursor: pointer;
}
.logoTitle {
  width: 270px;
  height: 100%;
  background: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
}
.uncheck {
  display: flex;
}
@media only screen and (max-width: 780px) {
  .nav_main {
    padding-right: 0px;
  }
  .logoTitle {
    width: 100%;
  }
  .uncheck {
    display: none;
  }
}
</style>
