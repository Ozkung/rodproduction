<template>
  <div>
    <div v-show="loadPage == false">
      <div class="loadPage">
        <img width="100px" height="100px" src="loading_1.gif" />
      </div>
    </div>
    <div
      v-show="loadPage == true"
      class="value_fate"
      style="
        background: url('bg_forest.jpg') 25% no-repeat fixed;
        height: 100%;
        background-size: cover;
      "
    >
      <!-- <navbar ref="nav" @trick="openNav" /> -->
      <div>
        <div style="position: relative">
          <div class="headerContact">ABOUT</div>
        </div>
        <div class="my-4 detailContact">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are
            a full service production house covering from Pre-Pro production,
            Production and Post production.
          </div>
          <div>
            Our in-house creative team will assist you in consulting and
            generating new ideas with the clients to ensure it reach objective
            with limited budget.
          </div>
          <div>
            Our team can provide the work/service on various scales from
            low-cost budget viral online work to Television commercial
            advertising.
          </div>
        </div>
      </div>

      <div
        ref="vdoMove"
        class="d-flex hidden-scroll"
        style="overflow: hidden; white-space: nowrap"
      >
        <div
          style="cursor: pointer"
          class="vdoContent ma-1"
          v-for="(n, x) in listCheck"
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

      <div class="my-4 detailContact">
        <div class="th_content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          เรารับผลิตสื่อครอบคลุมทุกรูปแบบพร้อมตอบสนองความต้องการตั้งแต่ขั้นตอนการเตรียมงาน
          คิด ค้น ไอเดียสดใหม่ (Pre-Production),
          ถ่ายทำด้วยอุปกรณ์และทีมงานผู้เชี่ยวชาญ (Production), และตัดต่อให้โดน ๆ
          ปัง ๆ (Post-Production) ด้วยทีมงานมืออาชีพในทุกขั้นตอน
          ที่พร้อมให้คำปรึกษาระดมความคิดเพื่อสร้าง "ชิ้นงาน"
          ที่ตอบสนองได้ตรงตามความต้องการในงบประมาณที่ลูกค้าพึงพอใจมากที่สุด
        </div>
      </div>
      <div ref="imgMove" class="d-flex hidden-scroll" :style="cursorG">
        <div v-for="n in counter" :key="n" class="vdoContent1 ma-1">
          <img draggable="false" width="100%" :src="`imgGallary/${n}.jpg`" />
        </div>
      </div>

      <div style="background: #000"><footbar /></div>
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
      navItem: ['Home', 'About', 'Services', 'Contact'],
      emailTag: 'rod.mpjt@gmail.com',
      // tel: '087-102-9600',
      cusEmail: '',
      cusMeassage: '',
      checkEmail: false,
      vaildation: false,
      emailrules: [
        (value) => !!value || 'Required.',
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          this.openCheckEmail(pattern.test(value))
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      msgrules: [(value) => !!value || 'Required.'],
      counter: [],
      listCheck: [],
      cursorG: 'cursor: grab;overflow: hidden; white-space: nowrap',
      dragimg: false,
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
  mounted() {
    this.$parent.$emit('loadAttr')

    this.listCheck = this.$_.cloneDeep(this.newlist)
    this.listCheck = this.$_.shuffle(this.listCheck)
    this.listCheck.length = 4
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
    // console.log('op', op)

    op.length = 6
    this.counter = op

    setTimeout(() => {
      this.loadPage = true
    }, 2500)

    setTimeout(() => {
      this.dragable()
      this.$nextTick(async () => {
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
      let elImg = this.$refs.imgMove
      let move = false
      this.$refs.imgMove.addEventListener('mousedown', () => {
        move = true
        _this.dragimg = move
        _this.cursorG = 'cursor: grabbing;overflow: hidden; white-space: nowrap'
      })
      this.$refs.imgMove.addEventListener('mousemove', function (event) {
        if (move == true) {
          elImg.scrollLeft -= event.movementX
        }
      })
      document.addEventListener('mouseup', () => {
        move = false
        _this.dragimg = move
        _this.cursorG = 'cursor: grab;overflow: hidden; white-space: nowrap'
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
    selectpage() {
      this.drawer = false
    },
    sendMail() {
      if (this.checkEmail == true && this.cusMeassage != '') {
        this.$mail.send({
          from: this.cusEmail,
          subject: 'Contact form Webpage',
          text: this.cusMeassage,
        })
      } else {
        this.vaildation = true
      }
    },
    openCheckEmail(item) {
      this.checkEmail = item
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
  color: #fff;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  padding-bottom: 0px;
  font-size: 3.4rem;
  font-weight: 600;
}

.detailContact {
  text-shadow: 2px 2px 5px #000;
  color: #fff;
  padding: 0px 14%;
  font-size: 28px;
  word-break: break-word;
}

.value_fate {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fit_bottom {
  width: 100%;
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
.vdoContent {
  min-width: 370px;
  width: 100%;
  &:hover {
    transform: scale(1.08);
  }
}
.vdoContent1 {
  min-width: 300px;
  width: 100%;
  &:hover {
    transform: scale(1.08);
  }
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

.th_content {
  word-break: break-word;
  font-size: 22px;
}
@media only screen and (max-width: 1000px) {
  .headerContact {
    margin-top: 70px;
  }
}

@media only screen and (max-width: 400px) {
  .detailContact {
    font-size: 18px;
    word-break: break-all;
  }
  .th_content {
    font-size: 16px;
    word-break: break-word;
  }
}
</style>
