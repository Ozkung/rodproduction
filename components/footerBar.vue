<template>
  <div>
    <div id="footer" :style="`width: 100%;height: ${heightfoot}px`" />
    <div
      ref="foot"
      class="d-flex justify-xl-start justify-lg-start flex-wrap margin-class"
      style="position: absolute; bottom: 0px"
    >
      <div class="pr-3 about">
        <div class="header">ABOUT</div>
        <div class="detail">
          {{ aboutDetail }}
        </div>
      </div>
      <div class="contact">
        <div class="header">CONTACT</div>
        <div class="detail">Tel. : {{ contactDetail.tel }}</div>
        <div class="detail2">E-mail : {{ contactDetail.emailTag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      heightfoot: '',
      aboutDetail:
        'R.O.D Production R.O.D PRODUCTION is a Media company base in bangkok, We\
        provide a full production services for commercials, short films, video\
        online, documentaries, music videos and branded content. Our in-house\
        creative team will assist you in consulting and generating new ideas\
        with the clients to ensure it reach objective with limited budget.',
      contactDetail: {
        emailTag: 'rod.mpjt@gmail.com',
        tel: '087-102-9600',
      },
    }
  },
  mounted() {
    this.heightfoot = this.$refs.foot.offsetHeight
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      this.heightfoot = this.$refs.foot.offsetHeight
    },
  },
}
</script>

<style lang="scss" scoped>
.margin-class {
  padding: 50px 14%;
}
.header {
  font-size: 24px;
}
.detail {
  font-size: 14px;
}
.detail2 {
  font-size: 14px;
}
.about {
  width: 80%;
}
.contact {
  width: 190px;
}
</style>
