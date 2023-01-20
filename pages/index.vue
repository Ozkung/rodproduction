<template>
  <div>
    <div class="app_main">
      <div class="vdo_text_content">
        <div class="topic">Media company base in bangkok</div>
        <div class="content">We provide a full production services for</div>
        <div class="content">
          commercials, short films, video online, documentaries, music videos
          and branded content.
        </div>
        <div class="btn">
          <v-btn class="btn_contact" depressed color="error">CONTACT</v-btn>
        </div>
      </div>
      <video width="100%" muted autoplay loop>
        <source src="2021_Reel-1.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- word -->
    <div class="my_advice my-5">
      <div style="font-weight: 600; font-size: 3.4rem">R.O.D Production</div>
      <br />
      <div class="content">
        Our in-house creative team will assist you in consulting and generating
        new ideas with the clients to ensure it reach objective with limited
        budget.
      </div>
    </div>
    <!-- sercvice -->
    <div
      style="
        background: url('RodReel2021.mp4_snapshot_01.17.582.jpg') no-repeat
          fixed;
        padding-bottom: 20px;
      "
    >
      <div class="d-flex justify-center align-center">
        <div style="color: #fff; font-size: 3.4rem">Service</div>
      </div>
      <div class="grid_services">
        <img
          v-for="(itemed, index) in slides"
          :key="index"
          :src="itemed"
          width="28%"
          @click="rootLink('/service/', index)"
        />
      </div>
    </div>
    <div class="d-flex" style="overflow-x: auto">
      <div
        style="
          position: relative;
          overflow: hidden;
          min-width: 320px;
          width: 100%;
          height: 240px;
          padding-top: 14%;
        "
        v-for="n in loop1"
        :key="n"
        class="ma-1"
      >
        <iframe
          class="responsive-iframe"
          :src="n"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="d-flex" style="overflow-x: auto">
      <div
        style="
          position: relative;
          overflow: hidden;
          min-width: 320px;
          width: 100%;
          height: 240px;
          padding-top: 14%;
        "
        v-for="n in loop2"
        :key="n"
        class="ma-1"
      >
        <iframe
          class="responsive-iframe"
          :src="n"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @link="closeNav" />
    </v-navigation-drawer>
    <div>
      <footbar />
    </div>
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
      slides: [
        'Untitled-1-07.jpg',
        'Untitled-1-08.jpg',
        'Untitled-1-09.jpg',
        'Untitled-1-10.jpg',
        'Untitled-1-11.jpg',
        'Untitled-1-12.jpg',
      ],
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
      counter: [],
      loop1: [],
      loop2: [],
      listCheck: [],
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
  computed: {
    listVDO() {
      return this.$store.state.youtube
    },
  },
  mounted() {
    this.listCheck = this.$_.cloneDeep(this.listVDO)
    this.listCheck = this.$_.shuffle(this.listCheck)
    this.listCheck.length = 8
    this.loop1 = [
      this.listCheck[0],
      this.listCheck[1],
      this.listCheck[2],
      this.listCheck[3],
    ]
    this.loop2 = [
      this.listCheck[4],
      this.listCheck[5],
      this.listCheck[6],
      this.listCheck[7],
    ]
  },
  methods: {
    rootLink(item, index) {
      let num = 0
      if (index == 0) num = 5
      if (index == 1) num = 2
      if (index == 2) num = 1
      if (index == 3) num = 0
      if (index == 4) num = 3
      if (index == 5) num = 4
      this.$store.commit('changeid', num)
      this.$router.push({ path: item })
    },
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
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.v-application {
  font-family: 'Teko', 'Sarabun' !important;
}
.v-application--wrap {
  background: black;
}
</style>
<style lang="scss" scoped>
.app {
  &_main {
    position: relative;
  }
}
.my_advice {
  color: #fff;
  margin: {
    left: 6rem;
    right: 6rem;
  }
  .title {
    font-weight: 600;
    font-size: 3.4rem !important;
  }
  .content {
    font-size: 1.4rem;
  }
}
.vdo_text_content {
  position: absolute;
  z-index: 5;
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10.7rem;
  width: 52vw;
  .topic {
    text-shadow: 2px 2px 5px #000;
    font-weight: 600;
    font-size: 3.4rem;
    word-break: break-all;
  }
  .content {
    text-shadow: 2px 2px 5px #000;
    font-size: 1.4rem;
    line-height: 1.25;
    padding-top: 4px;
    word-break: break-all;
    &:nth-child(3) {
      padding: {
        top: 0px;
        bottom: 24px;
      }
    }
  }
  .btn {
    .btn_contact {
      width: 27%;
      height: 40px;
      font-size: 1.5rem;
    }
  }
}
.service_style {
  max-width: 720px;
  margin: 0px auto;
}
.imgGroup {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      justify-content: end;
    }
    &:nth-child(3) {
      justify-content: start;
    }
  }
}
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
.grid_services {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    padding: 8px;
    cursor: pointer;
    transition: transform 0.2s; /* Animation */
    &:hover {
      transform: scale(1.08);
    }
  }
}

.imgH {
  height: 229px;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 390px) {
  .grid_services {
    max-width: unset;
    white-space: nowrap;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    img {
      padding: 8px;
      cursor: pointer;
    }
  }
}
</style>
