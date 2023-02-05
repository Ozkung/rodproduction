<template>
  <div>
    <!-- <div id="footer" :style="`width: 100%;height: ${heightfoot}px`" /> -->
    <div class="my-5 py-5">
      <div class="foot_center">
        <img src="logo.svg" width="70px" @click="rootLink('/contact/')" />
      </div>
    </div>
    <div class="end_contact">
      EMAIL : {{ emailTag }} &nbsp; TEL : {{ contactDetail.tel }}
    </div>
    <div class="end_credit">©2023 R.O.D PRODUCTION</div>
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
  watch: {
    // heightfoot() {
    //   console.log('this.heightfoot :', this.heightfoot)
    // }
  },
  mounted() {
    // this.heightfoot = this.$refs.foot.offsetHeight
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
      // this.heightfoot = this.$refs.foot.offsetHeight
    },
    rootLink(item) {
      this.$router.push({ path: item })
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
.foot_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.end_contact {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.end_credit {
  background: yellow;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 20px;
}
</style>
