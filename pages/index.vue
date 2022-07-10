<template>
  <div>
    <navbar />
    <v-carousel
      cycle
      height="650"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div
      style="
        margin-top: 50px;
        padding: 0px 270px;
        font-size: 72px;
        font-weight: 600;
      "
    >
      REELS
    </div>
    <div style="padding: 0px 270px" class="d-flex">
      <v-card class="mx-auto" max-width="400">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
      </v-card>
      <v-card class="mx-auto" max-width="400">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
      </v-card>
      <v-card class="mx-auto" max-width="400">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
      </v-card>
    </div>
    <div
      align="end"
      style="
        margin-top: 25px;
        padding: 0px 270px;
        font-size: 24px;
        font-weight: 600;
      "
    >
      MORE...
    </div>
    <div
      style="
        margin-top: 200px;
        padding: 0px 270px;
        font-size: 72px;
        font-weight: 600;
      "
    >
      SERVICES
    </div>
    <div style="padding: 0px 270px" class="d-flex">
      <v-card class="mx-auto" max-width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </div>
    <div
      align="end"
      style="
        margin-top: 25px;
        padding: 0px 270px;
        font-size: 24px;
        font-weight: 600;
      "
    >
      MORE...
    </div>
    <div
      style="background: yellow; margin-top: 200px; width: 100%; height: 200px"
    ></div>
  </div>
</template>

<script>
import navbar from '@/components/nav'
export default {
  name: 'IndexPage',
  components: { navbar },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third'],
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
}
</style>
