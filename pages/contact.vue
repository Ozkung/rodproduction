<template>
  <div>
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div style="margin-top: 53px">
      <div class="headerContact">Contact</div>
      <div class="mt-4 detailContact">
        <div>Tel. : {{ tel }}</div>
        <div>E-mail : {{ emailTag }}</div>
      </div>
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
      emailTag: 'rod.mpjt@gmail.com',
      tel: '087-102-9600',
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
  user-select: none;
  padding: 0px 14%;
  font-size: 450%;
  font-weight: 600;
  padding: {
    top: 50px;
    bottom: 150px;
  }
  background-color: #878787;
}

.detailContact {
  user-select: none;
  padding: 0px 14%;
  font-size: 18px;
}
@media only screen and (max-width: 900px) {
  .detailContact {
    margin-bottom: 60%;
  }
}

@media only screen and (max-width: 780px) {
  .detailContact {
    margin-bottom: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .detailContact {
    margin-bottom: 200%;
  }
}
</style>
