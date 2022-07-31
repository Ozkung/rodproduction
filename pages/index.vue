<template>
  <div>
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div style="margin-top: 53px">
      <v-carousel
        ref="slidePic"
        height="100%"
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]">
            <v-row class="fill-height" align="center" justify="center">
              <img :src="slide" width="100%" />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- REELS -->
    <div class="title_point">REELS</div>
    <v-container>
      <div class="d-flex justify-xl-center justify-lg-start overflow-class">
        <div v-for="(item, index) in reel" :key="index" class="mgrid1">
          <v-card max-width="400">
            <v-img :src="item.url" height="200px"></v-img>
          </v-card>
        </div>
      </div>
    </v-container>

    <div align="end" class="more_point" @click="goto('/image')">
      <span>IMAGE MORE...</span>
    </div>

    <div align="end" class="more_point" @click="goto('/video')">
      <span>VDO MORE...</span>
    </div>

    <!-- SERVICES -->
    <div class="title_point">SERVICES</div>
    <v-container>
      <div class="d-flex justify-xl-center justify-lg-start overflow-class">
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
    <div
      style="padding-bottom: 400px"
      align="end"
      class="more_point"
      @click="goto('/service')"
    >
      <span>MORE...</span>
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
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['Slide1.jpg', 'Slide2.jpg', 'Slide3.jpg'],
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
          name: 'Video online',
          title: 'Video online',
          url: 'https://cdn.pixabay.com/photo/2016/01/15/12/02/editing-1141505_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Corporate video',
          title: 'Corporate video',
          url: 'https://cdn.pixabay.com/photo/2020/04/29/19/29/flmaker-5110278_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Documentaries',
          title: 'Documentaries',
          url: 'https://cdn.pixabay.com/photo/2013/01/20/14/08/shooting-75599_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Music video',
          title: 'Music video',
          url: 'https://cdn.pixabay.com/photo/2014/01/04/13/44/photographer-238502_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        // {
        //   name: 'Info Graphic',
        //   title: 'Info Graphic',
        //   url: 'https://cdn.pixabay.com/photo/2020/08/27/21/05/design-5522955_960_720.jpg',
        //   description: '1,000 miles of wonder',
        // },
        // {
        //   name: '3D',
        //   title: '3D',
        //   url: 'https://cdn.pixabay.com/photo/2019/04/28/16/33/space-4163612_960_720.jpg',
        //   description: '1,000 miles of wonder',
        // },
        // {
        //   name: 'Wedding',
        //   title: 'Wedding',
        //   url: 'https://cdn.pixabay.com/photo/2018/01/16/11/57/bride-3085841_960_720.jpg',
        //   description: '1,000 miles of wonder',
        // },
      ],
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
    // drawer() {
    //   if (this.drawer == false) {
    //     this.$refs.nav.closeMenu(false)
    //   }
    // },
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
    goto(item) {
      this.$router.push({ path: item })
      this.$emit('link', false)
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
.overflow-class {
  overflow-x: auto;
  /*-ms-overflow-style: none; 
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }*/
}
</style>
