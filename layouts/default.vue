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
.footerProduction {
  background: #000;
  width: 100%;
  min-height: 190px;
}
.v-application--wrap {
  background: black;
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
