<template>
  <div>
    <v-list nav dense>
      <v-list-item>
        <v-list-item-title class="unselect" @click="goto('/')">
          Home
        </v-list-item-title>
      </v-list-item>

      <v-list-group :value="true">
        <template v-slot:activator>
          <v-list-item-title>Showreel</v-list-item-title>
        </template>

        <v-list-item v-for="(item, i) in admins" :key="i" class="ml-7" link>
          <v-list-item-title
            v-text="item[0]"
            @click="goto(`/${item[0].toLowerCase()}`)"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item>
        <v-list-item-title class="unselect" @click="goto('/service')">
          Services
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="unselect" @click="goto('/contact')">
          Contact
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admins: [
        ['Image', 'mdi-account-multiple-outline'],
        ['Video', 'mdi-cog-outline'],
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
</style>
