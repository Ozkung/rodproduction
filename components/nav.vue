<template>
  <div class="nav_main">
    <div
      style="
        width: 270px;
        height: 100%;
        background: yellow;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      Logo
    </div>
    <div class="d-flex">
      <div class="pr-5">HOME</div>
      <div class="pr-5">SHOWREEL</div>
      <div class="pr-5">SERVICES</div>
      <div class="pr-5">CONTACT</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.nav_main {
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 5px black;
  padding-right: 100px;
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>
