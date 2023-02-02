<template>
  <div>
    <div v-show="loadPage == false">
      <div class="loadPage">
        <img width="100px" height="100px" src="loading_1.gif" />
      </div>
    </div>
    <div v-show="loadPage == true" class="value_fate">
      <div class="d-flex justify-center" style="font-size: 3.4rem">
        SERVICES
      </div>
      <div
        :style="`background: ${item.bg}`"
        v-for="(item, index) in conetent_service"
        :key="index"
      >
        <div class="pa-4" ref="id_backword">
          <div style="font-size: 36px">{{ item.title }}</div>
          <div style="font-size: 16px">{{ item.detail }}</div>
          <!-- vdo -->
          <div class="vdocomp" :ref="`imgser${index}`" v-if="item.vdo">
            <div style="padding: 4px" v-for="(vdo, i) in item.thumb" :key="i">
              <img
                draggable="false"
                :src="vdo.thumb"
                class="imgres"
                @click="openlink(vdo.link)"
              />
            </div>
          </div>
          <!-- photo -->
          <div v-else>
            <masonry
              :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
              :gutter="15"
            >
              <div
                class="hoverscale"
                @click="modalScope(prop + 1)"
                v-for="prop in counter"
                :key="prop"
              >
                <img :src="`imgGallary/${prop + 1}.jpg`" width="100%" />
              </div>
            </masonry>
          </div>
        </div>
      </div>

      <v-dialog v-model="dialog" width="800">
        <img :src="`imgGallary/${initImg}.jpg`" width="100%" />
      </v-dialog>
      <div><footbar /></div>
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
      dialog: false,
      drawer: false,
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      conetent_service: [
        {
          bg: '#60606',
          title: 'Online Content / Viral Marketing',
          detail:
            'ในโลกยุคปัจจุบัน การตลาดออนไลน์เป็นหนึ่งในช่องทางสำคัญในการเข้าถึงกลุ่มลูกค้า เพื่อสร้างยอดขาย เพิ่มความรับรู้ในตัวแบรนด์ และสินค้า ได้ตลอด 24 ชั่วโมงอย่างไม่มีวันหยุด',
          vdo: [
            'https://www.youtube.com/embed/DwLMG67bVhg',
            'https://www.youtube.com/embed/WJRoGy4hf5I',
            'https://www.youtube.com/embed/2evs6DJIvDM',
            'https://www.youtube.com/embed/vp2KRMj3DXY',
            'https://www.youtube.com/embed/2vLmKG3suqs',
            'https://www.youtube.com/embed/1jNF1OOc1qc',
            'https://www.youtube.com/embed/lIQV_YXnLzQ',
            'https://www.youtube.com/embed/8GKIMtcZ5n0',
            'https://www.youtube.com/embed/5njL2RX7wPc',
          ],
        },
        {
          bg: '#3a3a3a',
          title: 'Presentation / Brand Corporate / Music Video',
          detail:
            'หนึ่งในช่องทางสำคัญในการนำเสนอวิสัยทัศน์  สร้างความน่าเชื่อถือ และบริการให้กับบริษัทคู่ค้า หรือกลุ่มลูกค้าให้มีความมั่นใจใน แบรนด์ และผลิตภัณฑ์ มากยิ่งขึ้น',
          vdo: [
            'https://www.youtube.com/embed/rA66mF6ywPk',
            'https://www.youtube.com/embed/6D9v7hM_AV8',
            'https://www.youtube.com/embed/-u2o_U_Z39U',
          ],
        },
        {
          bg: '#60606',
          title: 'Documentaries',
          detail:
            'ถ่ายทอดเรื่องราวแง่มุมต่าง ๆ ในสังคม เพื่อส่งเสริมภาพลักษณ์และการรับรู้ โครงการ CSR ทั้งของภาครัฐและเอกชน',
          vdo: [
            'https://www.youtube.com/embed/IeQVe5_R65o',
            'https://www.youtube.com/embed/gDfl1yTNxJI',
            'https://www.youtube.com/embed/dSYi06ID5RU',
          ],
        },
        {
          bg: '#3a3a3a',
          title: 'Infographic / 3D',
          detail:
            'จุดประกายสร้างยอดขายให้ปังด้วย	 Infographic และ 3D จากทีมงานมืออาชีพ',
          vdo: [
            'https://www.youtube.com/embed/kHhDk-K8bqM',
            'https://www.youtube.com/embed/OjyNaAwcLdo',
            'https://www.youtube.com/embed/mrmtu3bQ6u4',
            'https://www.youtube.com/embed/8K-WYmeh_Dk',
          ],
        },
        {
          bg: '#60606',
          title: 'Event Summary',
          detail:
            'บันทึกเรื่องราววันสำคัญ ช่วงเวลาพิเศษ งานแต่งงาน งานประชุม/สัมมนา งานแถลงข่าว งานแสดงสินค้า ทั้งในรูปแบบ Video และภาพนิ่ง',
          vdo: ['https://www.youtube.com/embed/_ZMJCRFzM9M'],
        },
        {
          bg: '#3a3a3a',
          title: 'Still Photography',
          detail:
            'สร้างสรรค์และถ่ายภาพนิ่งสินค้า แพ็คช๊อท เมนูอาหาร ภาพถ่ายบุคคล งานแต่งงาน งานอสังหาฯ บริษัท โรงงาน รวมไปถึงการออกแบบเพื่อทำสื่อโฆษณาต่าง ๆ',
        },
      ],
      counter: [],
      initImg: '',
      dragimg0: false,
      dragimg1: false,
      dragimg2: false,
      dragimg3: false,
      dragimg4: false,
    }
  },
  computed: {
    goto_title() {
      let str = this.$store.state.page_id

      return str
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.renderContent()
    let num = []
    for (let i = 0; i <= 53; i++) {
      num.push(i)
    }
    num = this._.shuffle(num)
    this.counter = num
    this.counter.length = 16

    if (this.goto_title) this.gotoID(this.goto_title)

    setTimeout(() => {
      this.loadPage = true
    }, 2500)

    setTimeout(() => {
      this.dragable()

      this.$nextTick(() => {
        document.addEventListener('contextmenu', (event) =>
          event.preventDefault()
        )
      })
    }, 3000)
  },
  methods: {
    openNav(item) {
      this.drawer = item
    },
    closeNav() {
      this.drawer = false
      // this.$refs.nav.closeMenu(false)
    },
    dragable() {
      let _this = this
      let elImg = this.$refs.imgser0[0]

      let move = false
      this.$refs.imgser0[0].addEventListener('mousedown', () => {
        move = true
        _this.dragimg0 = move
      })
      this.$refs.imgser0[0].addEventListener('mousemove', function (event) {
        if (move == true) {
          elImg.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move = false
        _this.dragimg0 = move
      })

      let elImg1 = this.$refs.imgser1[0]

      let move1 = false
      this.$refs.imgser1[0].addEventListener('mousedown', () => {
        move1 = true
        _this.dragimg1 = move1
      })
      this.$refs.imgser1[0].addEventListener('mousemove', function (event) {
        if (move1 == true) {
          elImg1.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move1 = false
        _this.dragimg1 = move1
      })

      let elImg2 = this.$refs.imgser2[0]

      let move2 = false
      this.$refs.imgser2[0].addEventListener('mousedown', () => {
        move2 = true
        _this.dragimg2 = move2
      })
      this.$refs.imgser2[0].addEventListener('mousemove', function (event) {
        if (move2 == true) {
          elImg2.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move2 = false
        _this.dragimg2 = move2
      })

      let elImg3 = this.$refs.imgser3[0]

      let move3 = false
      this.$refs.imgser3[0].addEventListener('mousedown', () => {
        move3 = true
        _this.dragimg3 = move3
      })
      this.$refs.imgser3[0].addEventListener('mousemove', function (event) {
        if (move3 == true) {
          elImg3.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move3 = false
        _this.dragimg3 = move3
      })

      let elImg4 = this.$refs.imgser4[0]

      let move4 = false
      this.$refs.imgser4[0].addEventListener('mousedown', () => {
        move4 = true
        _this.dragimg4 = move4
      })
      this.$refs.imgser4[0].addEventListener('mousemove', function (event) {
        if (move4 == true) {
          elImg4.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move4 = false
        _this.dragimg4 = move4
      })
    },
    selectpage() {
      this.drawer = false
    },
    gotoID(val) {
      setTimeout(() => {
        window.scrollTo({
          top: this.$refs.id_backword[val].offsetTop - 60,
          behavior: 'smooth',
        })
      }, 500)
      this.$store.commit('changeid', 0)
    },
    modalScope(item) {
      this.initImg = item
      this.dialog = true
    },
    renderContent() {
      // 0 - online content
      this.conetent_service[0].thumb = this._.shuffle(this.$store.state.online)
      // 1 - presentation
      this.conetent_service[1].thumb = this._.shuffle(this.$store.state.present)
      // 2 - document
      this.conetent_service[2].thumb = this._.shuffle(this.$store.state.theory)
      // 3 - info 3D
      this.conetent_service[3].thumb = this._.shuffle(this.$store.state.info)
      // 4 - event summary
      this.conetent_service[4].thumb = this._.shuffle(
        this.$store.state.eventSum
      )
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

.mgrid {
  margin: 0px 1%;
  margin-bottom: 25px;
}
.headerContact {
  position: absolute;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  font-size: 8vw;
  font-weight: 600;
}
.overflow-class {
  overflow-x: auto;
  /*-ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }*/
}
.value_fate {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  margin-top: 63px;
  height: 100%;
}

.loadevent {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 294.36px);
}
.vdocomp {
  overflow-x: scroll;
  display: flex;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
}

.hoverscale {
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
}

.imgres {
  min-width: 300px;
  width: 100%;
  max-width: 400px;
}
</style>
