<template>
  <div class="bg">
    <v-card class="cardlog">
      <div class="content">
        <div>Log-in</div>
      </div>
      <div>
        <div>
          <v-text-field label="Username" v-model="username"></v-text-field>
        </div>
      </div>
      <div style="margin-top: 12px">
        <div>
          <v-text-field label="Password" v-model="password"></v-text-field>
        </div>
      </div>
      <div style="display: flex; justify-content: end">
        <v-btn color="#014C56" small
          ><div style="color: #fff" @click="login()">Login</div></v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import Nav from '~/components/admin/nav'
export default {
  layout: 'blank',
  components: {
    Nav,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  mounted() {
    console.log('session', sessionStorage.getItem('user'))
  },
  methods: {
    login() {
      let obj = {
        username: this.username,
        password: this.password,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background: url('/bglog.jpg') no-repeat;
  background-size: cover;
  padding: 24px;
  .cardlog {
    width: 360px;
    padding: 12px;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
