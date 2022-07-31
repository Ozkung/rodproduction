<template>
  <div class="nav_main">
    <div class="logoTitle">
      <img
        class="cursorP"
        src="logoBWheader.svg"
        width="26px"
        @click="rootLink('/')"
      />
    </div>
    <div class="uncheck">
      <div class="pr-5 cursorP" @click="rootLink('/')">HOME</div>
      <div class="pr-5 cursorP">
        <v-menu ref="menu" open-on-click bottom offset-y auto>
          <template v-slot:activator="{ on, attrs }">
            <div dark v-bind="attrs" v-on="on">SHOWREEL</div>
          </template>

          <div class="d-flex" style="background: #fff">
            <div class="cursorP" v-for="(item, index) in items" :key="index">
              <div class="ma-2" @click="rootLink(item.path)">
                {{ item.title }}
              </div>
            </div>
          </div>
        </v-menu>
      </div>
      <div class="pr-5 cursorP" @click="rootLink('/service')">SERVICES</div>
      <div class="pr-5 cursorP" @click="rootLink('/contact')">CONTACT</div>
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
      items: [
        { title: 'VDO', path: '/video' },
        { title: 'PICTURE', path: '/image' },
      ],
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
    rootLink(item) {
      this.$router.push({ path: item })
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
  display: flex;
  align-items: center;
  padding-left: 50px;
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
