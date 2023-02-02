<template>
  <div style="width: 100%">
    <v-list nav dense>
      <v-list-item
        class="select_menu"
        v-for="(item, index) in list"
        :key="index"
        @click="goto(item.linkss)"
      >
        <v-list-item-title class="unselect">
          <div
            style="
              font-size: 46px;
              line-height: 5rem;
              text-align: center;
              width: 100%;
            "
          >
            {{ item.menu }}
          </div>
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
        { menu: 'Home', linkss: '/' },
        { menu: 'About', linkss: '/about' },
        { menu: 'Services', linkss: '/service' },
        { menu: 'Contact', linkss: '/contact' },
      ],
    }
  },
  methods: {
    goto(item) {
      this.$router.push({ path: item })
      this.$emit('links', false)
    },
  },
}
</script>
<style>
.theme--light.v-navigation-drawer {
  background: rgba(0, 0, 0, 0.75);
}
.v-navigation-drawer__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-list--dense .v-list-item {
  min-height: 80px;
}
.v-navigation-drawer {
  transform: unset !important;
  -webkit-animation: fadeInFromNone 1.5s ease-in-out;
  -moz-animation: fadeInFromNone 1.5s ease-in-out;
  -o-animation: fadeInFromNone 1.5s ease-in-out;
  animation: fadeInFromNone 1.5s ease-in-out;
}

@-webkit-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@-moz-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@-o-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}
</style>
<style lang="scss" scoped>
.unselect {
  color: #fff;
  user-select: none;
}
.select_menu {
  cursor: pointer;
  &:hover {
    background: rgba(102, 102, 102, 0.11);
  }
}
</style>
