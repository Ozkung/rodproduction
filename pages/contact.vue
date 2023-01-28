<template>
  <div class="value_fate">
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div class="flex_bg">
      <div class="layout1">
        <div class="title_contact">HOW MAY WE HELP?</div>
        <div class="detail">
          สอบถามข้อมูลเพิ่มเติม กรอกรายละเอียดงานที่ต้องการ
          ตามแบบฟอร์มทางด้านขวาได้เลย ทีมงานของเราพร้อมดูแลให้คำปรึกษาฟรี! ภายใน 1 วันทำการ
          หรือติดต่อตามช่องทางด้านล่างนี้
        </div>
        <div class="subtitle_contact">TEL : {{ tel }}</div>
        <div class="subtitle_contact">EMAIL : {{ emailTag }}</div>
        <div class="subtitle_contact">LINE :</div>
        <div>
          <img src="qr.jpg" width="200px" />
        </div>
      </div>
      <div class="layout2">
        <div class="d-flex">
          <div class="filedBox" v-for="item1 in emailSender0" :key="item1">
            <div class="subtitle_contact">{{ item1.title }}</div>
            <v-text-field
              solo
              v-model="item1.value"
              :placeholder="item1.title"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex">
          <div class="filedBox" v-for="item2 in emailSender1" :key="item2">
            <div class="subtitle_contact">{{ item2.title }}</div>
            <v-text-field
              solo
              v-model="item2.value"
              :placeholder="item2.title"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex">
          <div class="filedBox" v-for="item3 in emailSender2" :key="item3">
            <div class="subtitle_contact">{{ item3.title }}</div>
            <v-text-field
              solo
              v-model="item3.value"
              :placeholder="item3.title"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex">
          <div class="filedBox">
            <div class="subtitle_contact">{{ detail_convert.title }}</div>
            <v-textarea solo v-model="detail_convert.value"> </v-textarea>
          </div>
        </div>
        <div class="d-flex">
          <div class="filedBox">
            <v-btn color="error" large>
              <div style="font-size: 18px">SUBMIT</div>
            </v-btn>
          </div>
        </div>
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
      emailSender0: [
        { title: 'NAME', value: '' },
        { title: 'COMPANY', value: '' },
      ],
      emailSender1: [
        { title: 'EMAIL', value: '' },
        { title: 'PHONE NUMBER', value: '' },
      ],
      emailSender2: [
        { title: 'SERVICE REQUEST', value: '' },
        { title: 'BUDGET', value: '' },
      ],
      detail_convert: { title: 'DETAIL', value: '' },
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      emailTag: 'rod.mpjt@gmail.com',
      tel: '087-102-9600',
    }
  },
  methods: {
    openNav(item) {
      this.drawer = item
    },
    closeNav() {
      this.drawer = false
      // this.$refs.nav.closeMenu(false)
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
.flex_bg {
  color: #fff;
  margin: 100px auto;
  height: 100%;
  width: 100%;
  padding: 0px 5%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: baseline;
  .layout1 {
    width: 316px;
    .title_contact {
      padding-bottom: 16px;
      font-weight: 800;
      font-size: 56px;
    }
    .detail {
      padding-bottom: 16px;
    }
    .subtitle_contact {
      padding-bottom: 16px;
      font-size: 25px;
    }
  }
  .layout2 {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: auto;
    margin-top: 60px;
    .subtitle_contact {
      font-size: 18px;
    }
  }
}

@media only screen and (max-width: 800px) {
  .flex_bg {
    margin-top: 100px;
    flex-wrap: wrap;
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
.headerContact {
  position: absolute;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  font-size: 8vw;
  font-weight: 600;
}
.value_fate {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.detailContact {
  padding: 0px 14%;
  font-size: 18px;
}
.footerProduction {
  div {
    background: #000;
  }
}

.filedBox {
  width: 100%;
  margin: 0 24px;
}
</style>
