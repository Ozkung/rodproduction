<template>
  <div>
    <div v-show="loadPage == false">
      <div class="loadPage">
        <img width="100px" height="100px" src="loading_1.gif" />
      </div>
    </div>
    <div v-show="loadPage == true">
      <div class="app_main">
        <div class="vdo_text_content" v-if="windowWidth > 800">
          <div class="topic">Media team base in Thailand</div>
          <div class="content">
            We provide a full production services for commercials, short films,
            video online, documentaries, music videos and branded content.
          </div>
          <div class="btn">
            <v-btn
              @click="rootLink('/contact/')"
              class="btn_contact"
              depressed
              color="error"
              >CONTACT</v-btn
            >
          </div>
        </div>
        <!-- <div class="bgvdo">
          
        </div> -->
        <div class="bgvdo">
          <video id="convdo" width="100%" class="vdo" muted loop playsinline>
            <source src="Rodreel2021-1.mp4" type="video/mp4" />
          </video>
        </div>
        <!-- <div v-if="windowWidth < 400" class="topic_ab">
        Media team base in bangkok
      </div> -->
      </div>
      <!-- word -->
      <div class="my_advice">
        <div class="res_mobile" v-if="windowWidth < 800">
          <div class="topic">Media team base in bangkok</div>
          <div class="content">We provide a full production services for</div>
          <div class="content">
            commercials, short films, video online, documentaries, music videos
            and branded content.
          </div>
          <div class="btn">
            <v-btn
              @click="rootLink('/contact/')"
              class="btn_contact"
              depressed
              color="error"
              >CONTACT</v-btn
            >
          </div>
        </div>
        <div
          style="
            background: #3a3a3a;
            padding: 6vw;
            padding-right: 6vw;
            padding-top: 3vw;
            padding-bottom: 3vw;
          "
        >
          <div style="font-weight: 600; font-size: 3.4rem">
            R.O.D Production
          </div>
          <div class="content">
            Our in-house creative team will assist you in consulting and
            generating new ideas with the clients to ensure it reach objective
            with limited budget.
          </div>
        </div>
      </div>
      <!-- sercvice -->
      <div
        style="
          background: url('RodReel2021.mp4_snapshot_01.17.582.jpg') no-repeat;
          background-attachment: fixed;
          background-size: cover;
          padding-bottom: 20px;
        "
      >
        <div class="d-flex justify-center align-center">
          <div style="color: #fff; font-size: 3.4rem">Services</div>
        </div>
        <div class="grid_services">
          <img
            v-for="(itemed, index) in slides"
            :key="index"
            :src="itemed"
            width="32%"
            @click="rootLink('/service/', index)"
          />
        </div>
      </div>
      <div ref="vdoMove" class="d-flex vdolisthome">
        <div
          style="cursor: pointer"
          class="vdoContent ma-1"
          v-for="(n, x) in loop1"
          :key="x"
        >
          <img
            draggable="false"
            width="100%"
            :src="n.thumb"
            @click="openlink(n.link)"
          />
        </div>
      </div>
      <div ref="imgMove" class="d-flex imglisthome" :style="cursorG">
        <div v-for="n in loop2" :key="n" class="vdoContent1 ma-1">
          <img draggable="false" width="100%" :src="`imgGallary/${n}.jpg`" />
        </div>
      </div>

      <div>
        <footbar />
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @links="closeNav" />
    </v-navigation-drawer>
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
      loadPage: false,
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
      ],
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      counter: [],
      loop1: [],
      loop2: [],
      listCheck: [],
      hide: false,
      windowWidth: window.innerWidth,
      dragimg: true,
      cursorG: 'cursor: grab',
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  computed: {
    listVDO() {
      return this.$store.state.youtube
    },
    newlist() {
      let arr = []
      let online = this.$store.state.online
      let present = this.$store.state.present
      let doc = this.$store.state.theory
      let info = this.$store.state.info
      let eventSum = this.$store.state.eventSum
      arr = arr.concat(online)
      arr = arr.concat(present)
      arr = arr.concat(doc)
      arr = arr.concat(info)
      arr = arr.concat(eventSum)

      return arr
    },
  },
  async mounted() {
    let open = this.$_.cloneDeep(this.newlist)
    let shuf = this.$_.shuffle(open)
    shuf.length = 4
    this.loop1 = shuf

    let num = []
    for (let i = 0; i <= 53; i++) {
      num.push(i)
    }
    num = num.filter((i) => i !== 0)
    num = num.filter((i) => i !== 8)
    num = num.filter((i) => i !== 9)
    num = num.filter((i) => i !== 10)
    num = num.filter((i) => i !== 11)
    num = num.filter((i) => i !== 17)
    num = num.filter((i) => i !== 18)
    num = num.filter((i) => i !== 21)
    num = num.filter((i) => i !== 22)
    num = num.filter((i) => i !== 23)
    num = num.filter((i) => i !== 24)
    num = num.filter((i) => i !== 25)
    num = num.filter((i) => i !== 26)
    num = num.filter((i) => i !== 27)
    num = num.filter((i) => i !== 38)
    num = num.filter((i) => i !== 39)
    num = num.filter((i) => i !== 40)
    num = num.filter((i) => i !== 44)
    num = num.filter((i) => i !== 50)
    num = num.filter((i) => i !== 52)
    let op = this.$_.cloneDeep(num)
    op = this._.shuffle(op)

    op.length = 6
    this.loop2 = op

    setTimeout(() => {
      this.loadPage = true
    }, 2500)

    setTimeout(() => {
      this.dragable()

      window.addEventListener('scroll', this.onScroll)
      this.$nextTick(async () => {
        window.addEventListener('resize', this.onResize)
        document.addEventListener('contextmenu', (event) =>
          event.preventDefault()
        )
        document.getElementById('convdo').play()
        // document.getElementById('convdo').setAttribute('autoplay', 'autoplay')
      })
    }, 3000)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    dragable() {
      let _this = this
      let elImg = this.$refs.imgMove
      let move = false
      this.$refs.imgMove.addEventListener('mousedown', () => {
        move = true
        _this.dragimg = move
        _this.cursorG = 'cursor: grabbing'
      })
      this.$refs.imgMove.addEventListener('mousemove', function (event) {
        if (move == true) {
          elImg.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move = false
        _this.dragimg = move
        _this.cursorG = 'cursor: grab'
      })

      let elvdo = this.$refs.vdoMove
      let move1 = false
      this.$refs.vdoMove.addEventListener('mousedown', () => {
        move1 = true
      })
      this.$refs.vdoMove.addEventListener('mousemove', function (event) {
        if (move1 == true) {
          elvdo.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move1 = false
      })
    },
    onScroll(e) {
      this.windowTop = window.top.scrollY
      if (this.windowTop >= 690) this.hide = false
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
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
    openlink(prop) {
      window.open(prop, '_blank')
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

.v-application {
  font-family: 'Teko', 'IBM Plex Sans Thai' !important;
  user-select: none;
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
  z-index: 4;
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
    word-break: break-word;
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
    transition: transform 0.15s ease-in; /* Animation */
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

.res_mobile {
  padding: {
    left: 6vw;
    right: 6vw;
    bottom: 6vw;
  }
  .topic {
    text-shadow: 2px 2px 5px #000;
    font-weight: 600;
    font-size: 3.4rem;
    word-break: break-word;
  }
  .content {
    text-shadow: 2px 2px 5px #000;
    font-size: 1.4rem;
    line-height: 1.25;
    padding-top: 4px;
    word-break: break-word;
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

.bgvdo {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  .vdo {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}

.topic_ab {
  padding: 6vw;
  position: absolute;
  color: #fff;
  top: 650px;
  text-shadow: 2px 2px 5px #000;
  font-weight: 600;
  font-size: 3.4rem;
  word-break: break-all;
}

.vdoContent {
  min-width: 370px;
  width: 100%;
  transition: transform 0.15s ease-in; /* Animation */
  &:hover {
    transform: scale(1.08);
  }
}
.vdoContent1 {
  min-width: 300px;
  width: 100%;
  transition: transform 0.15s ease-in; /* Animation */
  &:hover {
    transform: scale(1.08);
  }
}
.vdolisthome {
  overflow-x: scroll;
  white-space: nowrap;
  align-items: center;
  margin-top: 14px;
  &::-webkit-scrollbar {
    display: none;
  }
}

.imglisthome {
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .bgvdo {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 100%;
    .vdo {
      position: absolute;
      top: 0;
      left: -250px;
      bottom: 0;
      right: 0;
      min-height: 100px;
      min-width: 700px;
      height: 370px !important;
      width: 700px !important;
    }
  }
}
</style>
