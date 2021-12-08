<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p><b>BÁNH SINH NHẬT</b></p>
        </div>
        <div class="form_account">
          <h4 style="text-align: center; padding-top: 50px"><b>BÁNH SINH NHẬT</b></h4>
          <v-row class="inner">
            <v-col>
              <product-card :products="products"  />
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue'
export default {
  name: "BirthdayCake",
  components:{
    ProductCard
  },
  data: () => ({
    products: [],
  }),
  async created(){
      const response = await axios.get('cake/type?query=bánh sinh nhật');
      this.products = response.data.cakes;
  },
  methods: {
  },
};
</script>

<style scoped>
.banner_account {
  background: url(//theme.hstatic.net/1000313040/1000406925/14/breadcrumb_bg.png?v=1757);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.overlay_account {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
}
.title_account {
  text-align: center;
  color: white;
  padding: 120px 0px;
  font-size: 35px;
}
.form_account {
  background: #f8f2e8;
}
.inner {
  padding: 50px 180px;
}
</style>