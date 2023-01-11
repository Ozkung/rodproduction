<template>
  <div class="value_fate">
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div style="margin-top: 53px">
      <div class="red_bg"></div>
    </div>

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
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      emailTag: 'rod.mpjt@gmail.com',
      tel: '087-102-9600',
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
    }
  },
  methods: {
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
<style lang="scss" scoped>
.red_bg {
  background: red;
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
</style>
