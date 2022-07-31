<template>
  <div>
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div style="margin-top: 53px">
      <div style="position: relative">
        <img src="Reel.jpg" />
        <div class="headerContact">
          Reels&nbsp;<span style="font-size: 28px">VDO</span>
        </div>
      </div>
    </div>
    <div class="padCenter my-4">
      <masonry
        :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
        :gutter="{ default: '30px', 700: '15px' }"
      >
        <div v-for="(item, index) in imgData" :key="index">
          <div>
            <img :src="item.img" />
          </div>
        </div>
      </masonry>
    </div>
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @link="closeNav" />
    </v-navigation-drawer>
    <div class="footerProduction"><footbar /></div>
  </div>
</template>

<script>
import navbar from '@/components/nav'
import list from '@/components/listmenu'
import footbar from '@/components/footerBar'
export default {
  name: 'IndexPage',
  components: { navbar, list, footbar },
  data() {
    return {
      drawer: false,
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      imgData: [
        { msg: '1', img: 'https://via.placeholder.com/340' },
        { msg: '2', img: 'https://via.placeholder.com/340' },
        { msg: '3', img: 'https://via.placeholder.com/340' },
        { msg: '4', img: 'https://via.placeholder.com/340' },
        { msg: '5', img: 'https://via.placeholder.com/340' },
        { msg: '6', img: 'https://via.placeholder.com/340' },
        { msg: '7', img: 'https://via.placeholder.com/340' },
        { msg: '8', img: 'https://via.placeholder.com/340' },
      ],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    openNav(item) {
      this.drawer = item
    },
    closeNav() {
      this.drawer = false
      // this.$refs.nav.closeMenu(false)
    },
    selectpage() {
      this.drawer = false
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
}
</style>
<style lang="scss" scoped>
.title_point {
  user-select: none;
  padding: 0px 14%;
  font-size: 450%;
  font-weight: 600;
}
.padCenter {
  padding: 0px 14%;
}
.more_point {
  user-select: none;
  margin-top: 25px;
  padding: 0px 15%;
  font-size: 24px;
  font-weight: 600;
  span {
    cursor: pointer;
  }
}
.mgrid1 {
  margin: 0px 18px;
  margin-bottom: 25px;
  &:first-child {
    margin: {
      left: 0px;
      right: 27px;
    }
  }
  &:last-child {
    margin: {
      left: 27px;
      right: 0px;
    }
  }
}
.mgrid {
  margin: 0px 18px;
  margin-bottom: 25px;
  &:first-child {
    margin: {
      left: 0px;
      right: 27px;
    }
  }
  &:last-child {
    margin: {
      left: 27px;
      right: 0px;
    }
  }
}
.headerContact {
  position: absolute;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  font-size: 650%;
  font-weight: 600;
}
</style>
