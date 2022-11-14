<template>
  <div>
    <div class="app_main">
      <div class="vdo_text_content">
        <div class="topic">Media Company base in bangkok</div>
        <div class="content">We Provide a full prodution services for</div>
        <div class="content">
          comemrcials, short flims, video online, documentaries, music, videos
          and branded content.
        </div>
        <div class="btn">
          <v-btn class="btn_contact" depressed color="error">CONTACT</v-btn>
        </div>
      </div>
      <video width="100%" muted autoplay loop>
        <source src="RodReel2021.mp4" type="video/mp4" />
      </video>
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
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
.v-application {
  font-family: 'Teko', sans-serif !important;
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
.vdo_text_content {
  position: absolute;
  z-index: 10;
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10.7rem;
  width: 52vw;
  .topic {
    font-weight: 600;
    font-size: 3.4rem;
    word-break: break-all;
  }
  .content {
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
