<template>
  <div class="value_fate">
    <div class="d-flex justify-center" style="font-size: 3.4rem">SERVICES</div>
    <div
      :style="`background: ${item.bg}`"
      v-for="(item, index) in conetent_service"
      :key="index"
    >
      <div class="pa-4" ref="id_backword">
        <div style="font-size: 48px">{{ item.title }}</div>
        <div style="font-size: 16px">{{ item.detail }}</div>
        <div class="vdocomp" v-if="item.vdo">
          <div style="padding: 4px" v-for="vdo in item.vdo" :key="vdo">
            <iframe
              :src="vdo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div v-else>
          <masonry :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }" :gutter="15">
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
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @links="closeNav" />
    </v-navigation-drawer>
    <v-dialog v-model="dialog" width="800">
      <img :src="`imgGallary/${initImg}.jpg`" width="100%" />
    </v-dialog>
    <div><footbar /></div>
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
    let num = []
    for (let i = 0; i <= 53; i++) {
      num.push(i)
    }
    num = this._.shuffle(num)
    this.counter = num
    this.counter.length = 16

    if (this.goto_title) this.gotoID(this.goto_title)
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
  display: flex;
  flex-wrap: wrap;
}

.hoverscale {
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
}
@media only screen and (max-width: 1280px) {
  .vdocomp {
    white-space: nowrap;
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
}
</style>
