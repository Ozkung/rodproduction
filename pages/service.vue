<template>
  <div>
    <div v-for="(item, index) in conetent_service" :key="index">
      <div>{{ item.title }}</div>
      <div>{{ item.detail }}</div>
    </div>
    <div><footbar /></div>
  </div>
</template>

<script>
import navbar from '@/components/nav'
import list from '@/components/listmenu'
import footbar from '@/components/footerBar'
export default {
  name: 'IndexPage',
  components: { navbar, list, footbar },
  data() {
    return {
      drawer: false,
      group: null,
      navItem: ['Home', 'Showreel', 'Services', 'Contact'],
      services: [
        {
          name: 'Video online',
          title: 'Video online',
          url: 'https://cdn.pixabay.com/photo/2016/01/15/12/02/editing-1141505_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Corporate video',
          title: 'Corporate video',
          url: 'https://cdn.pixabay.com/photo/2020/04/29/19/29/flmaker-5110278_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Documentaries',
          title: 'Documentaries',
          url: 'https://cdn.pixabay.com/photo/2013/01/20/14/08/shooting-75599_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Music video',
          title: 'Music video',
          url: 'https://cdn.pixabay.com/photo/2014/01/04/13/44/photographer-238502_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Info Graphic',
          title: 'Info Graphic',
          url: 'https://cdn.pixabay.com/photo/2020/08/27/21/05/design-5522955_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: '3D',
          title: '3D',
          url: 'https://cdn.pixabay.com/photo/2019/04/28/16/33/space-4163612_960_720.jpg',
          description: '1,000 miles of wonder',
        },
        {
          name: 'Wedding',
          title: 'Wedding',
          url: 'https://cdn.pixabay.com/photo/2018/01/16/11/57/bride-3085841_960_720.jpg',
          description: '1,000 miles of wonder',
        },
      ],
      conetent_service: [
        {
          title: 'Online Content / Viral Marketing',
          detail:
            'ในโลกยุคปัจจุบัน การตลาดออนไลน์เป็นหนึ่งในช่องทางสำคัญในการเข้าถึงกลุ่มลูกค้า เพื่อสร้างยอดขาย เพิ่มความรับรู้ในตัวแบรนด์ และสินค้า ได้ตลอด 24 ชั่วโมงอย่างไม่มีวันหยุด',
        },
        {
          title: 'Presentation / Brand Corporate',
          detail:
            'หนึ่งในช่องทางสำคัญในการนำเสนอวิสัยทัศน์  สร้างความน่าเชื่อถือ และบริการให้กับบริษัทคู่ค้า หรือกลุ่มลูกค้าให้มีความมั่นใจใน แบรนด์ และผลิตภัณฑ์ มากยิ่งขึ้น',
        },
        {
          title: 'Documentaries',
          detail:
            'ถ่ายทอดเรื่องราวแง่มุมต่าง ๆ ในสังคม เพื่อส่งเสริมภาพลักษณ์และการรับรู้ โครงการ CSR ทั้งของภาครัฐและเอกชน',
        },
        {
          title: 'Infographic / 3D',
          detail:
            'จุดประกายสร้างยอดขายให้ปังด้วย	 Infographic และ 3D จากทีมงานมืออาชีพ',
        },
        {
          title: 'Event Summary',
          detail:
            'บันทึกเรื่องราววันสำคัญ ช่วงเวลาพิเศษ งานแต่งงาน งานประชุม/สัมมนา งานแถลงข่าว งานแสดงสินค้า ทั้งในรูปแบบ Video และภาพนิ่ง',
        },
        {
          title: 'Still Photography',
          detail:
            'สร้างสรรค์และถ่ายภาพนิ่งสินค้า แพ็คช๊อท เมนูอาหาร ภาพถ่ายบุคคล งานแต่งงาน งานอสังหาฯ บริษัท โรงงาน รวมไปถึงการออกแบบเพื่อทำสื่อโฆษณาต่าง ๆ',
        },
      ],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    openNav(item) {
      this.drawer = item
    },
    closeNav() {
      this.drawer = false
      // this.$refs.nav.closeMenu(false)
    },
    selectpage() {
      this.drawer = false
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-application {
  font-family: 'Anton', sans-serif;
}
</style>
<style lang="scss" scoped>
.title_point {
  user-select: none;
  padding: 0px 14%;
  font-size: 450%;
  font-weight: 600;
}
.more_point {
  user-select: none;
  margin-top: 25px;
  padding: 0px 15%;
  font-size: 24px;
  font-weight: 600;
  span {
    cursor: pointer;
  }
}

.mgrid {
  margin: 0px 1%;
  margin-bottom: 25px;
}
.headerContact {
  position: absolute;
  top: 0px;
  user-select: none;
  padding: 8% 14%;
  font-size: 8vw;
  font-weight: 600;
}
.overflow-class {
  overflow-x: auto;
  /*-ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }*/
}
</style>
