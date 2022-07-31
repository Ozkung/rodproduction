<template>
  <v-app light>
    <navbar @trick="openNav" />
    <Nuxt ref="Mpages" />
  </v-app>
</template>

<script>
import navbar from '~/components/nav'
export default {
  components: { navbar },
  data() {
    return {
      page: null,
    }
  },
  methods: {
    openNav(item) {
      this.$refs.Mpages.$children[0].openNav(item)
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
}
.footerProduction {
  background: #9b8d29b0;
  width: 100%;
  min-height: 190px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
