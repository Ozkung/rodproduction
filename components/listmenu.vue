<template>
  <div>
    <v-list nav dense>
      <v-list-item
        class="select_menu"
        v-for="(item, index) in list"
        :key="index"
        @click="goto(item.link)"
      >
        <v-list-item-title class="unselect">
          {{ item.menu }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { menu: 'Home', link: '/' },
        { menu: 'About', link: '/about' },
        { menu: 'Services', link: '/service' },
        { menu: 'Contact', link: '/contact' },
      ],
    }
  },
  methods: {
    goto(item) {
      this.$router.push({ path: item })
      this.$emit('link', false)
    },
  },
}
</script>
<style lang="scss" scoped>
.unselect {
  user-select: none;
}
.select_menu {
  cursor: pointer;
  &:hover {
    background: rgba(102, 102, 102, 0.11);
  }
}
</style>
