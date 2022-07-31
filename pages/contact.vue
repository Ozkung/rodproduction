<template>
  <div>
    <!-- <navbar ref="nav" @trick="openNav" /> -->
    <div style="margin-top: 53px">
      <div style="position: relative">
        <img src="contact.jpg" />
        <div class="headerContact">Contact</div>
      </div>
      <div class="my-4 detailContact">
        <div>Tel. : {{ tel }}</div>
        <div>E-mail : {{ emailTag }}</div>
        <div class="mt-4">
          <label for="email">Your email address:</label>
          <div>
            <v-text-field
              label="Your E-mail"
              :rules="emailrules"
              v-model="cusEmail"
              solo
            ></v-text-field>
          </div>
          <label for="message">Message:</label>
          <div>
            <v-textarea
              solo
              :rules="msgrules"
              name="input-7-4"
              rows="3"
              row-height="30"
              v-model="cusMeassage"
              label="Your Message"
            ></v-textarea>
          </div>
          <div class="d-flex align-start">
            <v-btn outlined color="indigo" @click="sendMail()">
              Send E-mail
            </v-btn>
            <div style="width: 250px" class="pl-4">
              <v-alert v-model="vaildation" type="error" dismissible>
                Incorrect Pattern.
              </v-alert>
            </div>
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
  watch: {
    group() {
      this.drawer = false
    },
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
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
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
  position: absolute;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  font-size: 650%;
  font-weight: 600;
}

.detailContact {
  padding: 0px 14%;
  font-size: 18px;
}
</style>
