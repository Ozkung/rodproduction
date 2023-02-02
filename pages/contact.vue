<template>
  <div class="value_fate">
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div class="flex_bg">
      <div class="layout1">
        <div class="title_contact">HOW MAY WE HELP?</div>
        <div class="detail">
          สอบถามข้อมูลเพิ่มเติม&nbsp;กรอกรายละเอียดงานที่ต้องการ
          ตามแบบฟอร์มทางด้านขวาได้เลย
          ทีมงานของเราพร้อมดูแลให้คำปรึกษาฟรี!&nbsp;ภายใน&nbsp;1&nbsp;วันทำการ
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
        <!-- emailSender0 -->
        <div class="d-flex">
          <div
            class="filedBox"
            v-for="(item1, index1) in emailSender0"
            :key="index1"
          >
            <div class="subtitle_contact" v-html="item1.title"></div>
            <v-text-field
              solo
              :rules="item1.rule"
              v-model="item1.value"
              :placeholder="item1.placeholder"
            ></v-text-field>
          </div>
        </div>
        <!-- emailSender1 -->
        <div class="d-flex">
          <div
            class="filedBox"
            v-for="(item2, index2) in emailSender1"
            :key="index2"
          >
            <div class="subtitle_contact" v-html="item2.title"></div>
            <v-text-field
              solo
              v-model="item2.value"
              :placeholder="item2.placeholder"
            ></v-text-field>
          </div>
        </div>
        <!-- emailSender2 -->
        <div class="d-flex">
          <div class="filedBox">
            <div class="subtitle_contact" v-html="emailSender2[0].title"></div>
            <v-select
              solo
              :items="serviceList"
              v-model="emailSender2[0].value"
              :placeholder="emailSender2[0].placeholder"
            ></v-select>
          </div>
          <div class="filedBox">
            <div class="subtitle_contact" v-html="emailSender2[1].title"></div>
            <v-text-field
              solo
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              v-model="emailSender2[1].value"
              :placeholder="emailSender2[1].placeholder"
            ></v-text-field>
          </div>
        </div>

        <div class="d-flex">
          <div class="filedBox">
            <div class="subtitle_contact" v-html="detail_convert.title"></div>
            <v-textarea solo v-model="detail_convert.value"> </v-textarea>
          </div>
        </div>
        <div class="d-flex justify-start">
          <div class="filedBox d-flex align-center">
            <v-btn color="error" @click="sendEmail()" large>
              <div style="font-size: 18px">SUBMIT</div>
            </v-btn>
            <div style="color: #fff000; padding-left: 16px">
              {{ sendingmsg }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" width="100%" fixed>
      <list @links="closeNav" />
    </v-navigation-drawer>
    <v-dialog max-width="340" v-model="validateFrom">
      <v-card class="container">
        <div style="font-size: 24px">Please complete the form above.</div>
        <div class="d-flex justify-end">
          <v-btn color="error" small @click="validateFrom = false">OK</v-btn>
        </div>
      </v-card>
    </v-dialog>
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
        {
          title: 'NAME <span style="color: red">*</span>',
          value: '',
          placeholder: 'Your Name',
        },
        { title: 'COMPANY', value: '', placeholder: 'Your Company', rule: [] },
      ],
      emailSender1: [
        {
          title: 'EMAIL <span style="color: red">*</span>',
          value: '',
          placeholder: 'You Email',
        },
        {
          title: 'PHONE NUMBER <span style="color: red">*</span>',
          value: '',
          placeholder: 'Your Phone Number',
        },
      ],
      emailSender2: [
        {
          title: 'SERVICE REQUEST <span style="color: red">*</span>',
          value: '',
          placeholder: 'Select One',
        },
        {
          title: 'BUDGET',
          value: '',
          placeholder: 'ex. 10000',
        },
      ],
      detail_convert: {
        title: 'DETAIL <span style="color: red">*</span>',
        value: '',
        placeholder: 'Messsage',
      },
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      serviceList: [
        'Online Content / Viral Marketing',
        'Presentation / Brand Corporate / Music Video',
        'Documentaries',
        'Infographic / 3D',
        'Event Summary',
        'Still Photography',
        'Other',
      ],
      emailTag: 'rod.mpjt@gmail.com',
      tel: '087-102-9600',
      validateFrom: false,
      sendingmsg: '',
    }
  },

  methods: {
    openNav(item) {
      this.drawer = item
    },
    closeNav() {
      this.drawer = false
    },
    async sendEmail() {
      this.validateFrom = false
      let name = '\nName: ' + this.emailSender0[0].value
      let tels = '\nTel: ' + this.emailSender1[1].value
      let detail = this.detail_convert.value
      let company = '\nCompany: ' + this.emailSender0[1].value
      let budget =
        'Budget: ' + this.emailSender2[1].value
          ? this.emailSender2[1].value
          : 'Unknow'

      if (this.emailSender0[0].value == '') return (this.validateFrom = true)
      if (this.emailSender1[0].value == '') return (this.validateFrom = true)
      if (this.emailSender1[1].value == '') return (this.validateFrom = true)
      if (this.emailSender2[0].value == '') return (this.validateFrom = true)
      if (detail == '') return (this.validateFrom = true)
      let obj = {
        from: this.emailSender1[0].value,
        subject:
          this.emailSender2[0].value +
          ' ' +
          '[' +
          name +
          ' ' +
          ':' +
          ' ' +
          budget +
          'THB' +
          ']',
        text:
          'Service: ' +
          this.emailSender2[0].value +
          '\n\nDetail: ' +
          detail +
          '\n' +
          name +
          '\n' +
          '\nEmail: ' +
          this.emailSender1[0].value +
          '\n' +
          company +
          '\n' +
          '\nBudget: ' +
          budget +
          'THB' +
          '\n' +
          tels,
      }

      await this.$mail.send(obj)
      this.validateFrom = false
      this.sendingmsg = 'Send complete!!!'
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
      font-size: 32px;
    }
    .detail {
      word-break: break-word;
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
    margin-left: 10rem;
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
    .layout2 {
      margin-left: 0px;
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
  font-size: 16px;
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
