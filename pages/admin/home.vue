<template>
  <div>Test sss</div>
</template>

<script>
export default {
  layout: 'blank',
  mounted() {
    if (sessionStorage.getItem('Userkey')) {
      console.log('redirect to login')
    }
  },
}
</script>

<style lang="scss" scoped></style>
