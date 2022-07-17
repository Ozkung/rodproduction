<template>
  <div>
    <navbar ref="nav" @trick="openNav" />
    <v-carousel
      cycle
      height="650"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="title_point">REELS</div>
    <v-container>
      <div class="d-flex justify-xl-center justify-lg-start overflow-x-auto">
        <div v-for="(item, index) in reel" :key="index" class="mgrid1">
          <v-card max-width="400">
            <v-img :src="item.url" height="200px"></v-img>
          </v-card>
        </div>
      </div>
    </v-container>
    <div align="end" class="more_point">
      <span>MORE...</span>
    </div>
    <div class="title_point">SERVICES</div>
    <v-container>
      <div class="d-flex justify-xl-center justify-lg-start overflow-x-auto">
        <v-card
          class="mgrid"
          max-width="300"
          v-for="(item, index) in services"
          :key="index"
        >
          <v-img :src="item.url" height="200px"></v-img>
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-subtitle> {{ item.description }} </v-card-subtitle>
        </v-card>
      </div>
    </v-container>
    <div align="end" class="more_point">
      <span>MORE...</span>
    </div>
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <div v-for="item in navItem" :key="item">
            <v-list-item>
              <v-list-item-title @click="selectpage(item)">{{
                item
              }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="footerProduction"></div>
  </div>
</template>

<script>
import navbar from '@/components/nav'
export default {
  name: 'IndexPage',
  components: { navbar },
  data() {
    return {
      drawer: false,
      group: null,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third'],
      slidesToken: [
        { name: 'First', url: 'First' },
        { name: 'Second', url: 'Second' },
        { name: 'Third', url: 'Third' },
      ],
      reel: [
        {
          name: 'reel1',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        },
        {
          name: 'reel2',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        },
        {
          name: 'reel3',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        },
      ],
      services: [
        {
          name: 'services1',
          title: 'Top western road trips',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'services2',
          title: 'Top western road trips',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'services3',
          title: 'Top western road trips',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'services4',
          title: 'Top western road trips',
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          description: '1,000 miles of wonder',
        },
      ],
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
    drawer() {
      if (this.drawer == false) {
        this.$refs.nav.closeMenu(false)
      }
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
.footerProduction {
  background: yellow;
  margin-top: 200px;
  width: 100%;
  height: 200px;
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
</style>
