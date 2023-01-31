<template>
  <div
    class="value_fate"
    style="background: url('bg_forest.jpg') 25% no-repeat fixed; height: 100%"
  >
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div>
      <div style="position: relative">
        <div class="headerContact">ABOUT</div>
      </div>
      <div class="my-4 detailContact">
        <div>
          We are a full service production house covering from pre and pro
          production, production, post production.
        </div>
        <div>
          Our in-house creative team will assist you in consulting and
          generating new ideas with the clients to ensure it reach objective
          with limited budget.
        </div>
        <div>
          Our team can provide the work/service on various scales from low-cost
          budget viral online work to Television commercial adverting.
        </div>
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
        v-for="n in listCheck"
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

    <div class="my-4 detailContact">
      <div>
        เรารับผลิตสื่อครอบคลุมทุกรูปแบบพร้อมตอบสนองความต้องการตั้งแต่ขั้นตอนการเตรียมงาน
        คิด ค้น ไอเดียสดใหม่<span style="font-size: 20px">
          (Pre-Production), </span
        >ถ่ายทำด้วยอุปกรณ์และทีมงานผู้เชี่ยวชาญ<span style="font-size: 20px">
          (Production), </span
        >และตัดต่อให้โดน ๆ ปัง ๆ<span style="font-size: 20px">
          (Post-Production) </span
        >ด้วยทีมงานมืออาชีพในทุกขั้นตอน ที่พร้อมให้คำปรึกษาระดมความคิดเพื่อสร้าง
        "ชิ้นงาน"ที่ตอบสนองได้ตรงตามความต้องการในงบประมาณที่ลูกค้าพึงพอใจมากที่สุด
      </div>
    </div>

    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @links="closeNav" />
    </v-navigation-drawer>

    <div style="background: #000"><footbar /></div>
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
  },
  mounted() {
    this.listCheck = this.$_.cloneDeep(this.listVDO)
    this.listCheck = this.$_.shuffle(this.listCheck)
    this.listCheck.length = 4
    let num = []
    for (let i = 0; i <= 28; i++) {
      num.push(i)
    }
    num = this._.shuffle(num)
    this.counter = num
    this.counter.length = 4
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
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.v-application {
  font-family: 'Teko', 'Sarabun' !important;
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
  color: #fff;
  padding: 0px 14%;
  font-size: 18px;
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
</style>
