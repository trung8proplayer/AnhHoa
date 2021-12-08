<template>
  <div>
    <div class="banner">
      <template>
        <v-carousel
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <a href="">
            <v-carousel-item v-for="item in imgs" :key="item">
              <v-img :src="item"></v-img>
            </v-carousel-item>
          </a>
        </v-carousel>
      </template>
    </div>
    <v-main style="background-color: #f8f2e8">
      <v-container class="products">
        <div class="products_title">
          <h3>DANH SÁCH BÁNH TIÊU BIỂU</h3>
          <h2>
            <img
              src="//theme.hstatic.net/1000313040/1000406925/14/home_line_collection1.png?v=1757"
              alt=""
            />
          </h2>
        </div>
        <product-card :products="products"  />
        <v-row>
          <v-col>
            <div class="btn_view-more">
              <router-link to="/highlights-cake">Xem thêm</router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from './ProductCard.vue'
export default {
  name: "HomeProducts",
  components:{
    ProductCard
  },
  data: () => ({
    imgs: [
      "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img2.jpg?v=1757",
      "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img3.jpg?v=1757",
      "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img4.jpg?v=1757",
      "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img5.jpg?v=1757",
    ],
    products: [],
  }),
  async created() {
    const response = await axios.get("cake");
    for (let index = 0; index < 12; index++) {
      this.products.push(response.data[index])
    }
  },
};
</script>

<style scoped>
.products_title {
  text-align: center;
  padding: 30px;
}
.products_title h3 {
  font-size: 32px;
  color: #c0c906;
  margin-bottom: 0;
  font-weight: bold;
}
.title {
  text-align: center;
}
.title_name {
  color: #333333;
  padding-top: 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
}
.product_price {
  display: inline-block;
  padding: 0px 15px;
  height: 40px;
  line-height: 40px;
  background: #c0c906;
  color: #fff;
  border-top-right-radius: 10px;
  position: relative;
  z-index: 1;
  font-weight: bold;
}
.product_actions {
  display: inline-block;
  position: relative;
  z-index: 1;
}
.product_actions .pro_cart {
  height: 40px;
  line-height: 40px;
  width: 45px;
  padding: 0px;
  margin: 0px 0px 0px -7px;
  background: #3d1a1a;
  color: #fff;
  border: 0px;
  outline: 0px;
  border-top-right-radius: 10px;
}
.btn_view-more {
  margin: 20px 0px;
  text-align: center;
}
.btn_view-more a {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  background: #3d1a1a;
}
.detail_product{
  background-color: white;
  height: 500px;
  width: 800px;
}
.btn_close{
    position: absolute;
    top: -15px;
    right: -15px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    display: block;
    height: 30px;
    width: 30px;
    background-color: #3d1a1a;
    text-align: center;
    z-index: 9999;
    border-radius: 50%;
    line-height: 30px;
    cursor: pointer;
}
.v-overlay{
  transition: 0.05s;
  color: black;
}
.product_photo {
  height: 350px;
  border-radius: 10px;
}
.photo {
  width: 90%;
  height: 90%;
  margin: 5%;
  border-radius: 10px;
}
.product_photo_small {
  margin-top: 10px;
  width: 100px;
  border-radius: 10px;
}.infor {
  padding: 20px 0px;
}
.soluong {
  display: inline-flex;
  margin-left: 10px;
  border: solid 1px;
  border-radius: 5px;
}
.btn_minus{
  border-right: 1px solid;
}
.btn_plus{
  border-left: 1px solid;
}
.ic{
  color: black;
}
.btnAddtocart {
  background: #3d1a1a;
  color: #fff;
  padding: 5px 10px;
}
.addCart{
  padding-top: 30px;
}
.txt_detail{
  margin-top: 10px;
}
.txt_detail a{
  color: #3d1a1a;
}
</style>