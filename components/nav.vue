<template>
  <div class="nav_main" :style="bgcolor">
    <div class="logoTitle pl-5">
      <img
        class="cursorP mr-5"
        src="logo.svg"
        width="26px"
        @click="rootLink('/')"
      />
      <img class="cursorP" src="rod.svg" @click="rootLink('/')" />
    </div>
    <div class="uncheck d-none" v-if="windowWidth > 780">
      <div class="pr-5 cursorP" @click="rootLink('/')">HOME</div>
      <div class="pr-5 cursorP" @click="rootLink('/about/')">ABOUT</div>
      <div class="pr-5 cursorP" @click="rootLink('/service/')">SERVICES</div>
      <div class="pr-5 cursorP" @click="rootLink('/contact/')">CONTACT</div>
    </div>
    <div v-if="windowWidth < 780" class="mx-3">
      <v-app-bar dark color="transparent" class="elevation-0">
        <v-app-bar-nav-icon @click.stop="trickMenu()"></v-app-bar-nav-icon>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgcolor: 'background: transparent',
      drawer: false,
      group: null,
      windowWidth: window.innerWidth,
      items: [
        { title: 'VDO', path: '/video' },
        { title: 'PICTURE', path: '/image' },
      ],
    }
  },
  computed: {
    namePage() {
      return this.$route.name
    },
  },
  watch: {
    namePage() {
      if (this.namePage !== 'index') this.bgcolor = 'background: #000'
      else this.bgcolor = 'background: transparent'
    },
    group() {
      this.drawer = false
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onScroll(e) {
      this.windowTop =
        window.top.scrollY /* or: e.target.documentElement.scrollTop */
      if (this.$route.name == 'index') {
        if (this.windowTop >= 690) this.bgcolor = 'background: #000'
        else this.bgcolor = 'background: transparent'
      } else {
        this.bgcolor = 'background: #000'
      }
    },
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
    rootLink(item) {
      this.$router.push({ path: item })
    },
  },
}
</script>
<style scoped>
.nav_main {
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 15;
  width: 100%;
  transition: background 0.5s ease;
}
.cursorP {
  user-select: none;
  cursor: pointer;
  color: #fff;
}
.logoTitle {
  width: 270px;
  height: 100%;
  display: flex;
  align-items: center;
}
.uncheck {
  display: flex;
}
/*@media only screen and (max-width: 780px) {
  .nav_main {
    padding-right: 0px;
  }
  .logoTitle {
    width: 100%;
  }
  .uncheck {
    display: none;
  }
}*/
</style>
