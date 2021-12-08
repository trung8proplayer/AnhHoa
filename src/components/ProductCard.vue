<template>
    <div>
        <v-row>
          <v-col cols="3" v-for="item in products" :key="item">
            <v-card class="mx-auto">
              <router-link
                :to="{ name: 'ProductDetail', params: { id: item._id} }"
              >
                <v-img
                  class="white--text align-end"
                  height="255px"
                  :src="item.cake_image"
                >
                </v-img>
              </router-link>
              <div class="title">
                <router-link :to="{ name: 'ProductDetail', params: { id: item._id} }" class="title_name"
                  ><h6 style="font-weight: bold;margin-bottom: 0px">{{item.cake_name}}</h6></router-link
                >
                <small>{{item.cake_option}}</small>
              </div>

              <div>
                <div class="product_price">{{formatCash(item.price.toString())}}₫</div>
                <div class="product_actions">
                  <button class="pro_cart" @click="[overlay=!overlay, showDetail(item._id)]">
                    <v-icon style="color: white">mdi-cart</v-icon>
                  </button>
                  <v-overlay :z-index="zIndex" :value="overlay" :opacity="0.05" color="rgba(0, 0, 0, 0.4)">
                     <span
                        @click="overlay = false" class="btn_close"
                      >
                        <v-icon>mdi-close</v-icon>
                      </span>
                      <div class="detail_product">
                        <v-row>
                          <v-col cols="6">
                            <div class="product_photo">
                              <img :src="productDetail.cake_image" class="photo" />
                            </div>
                            <div class="product_photo_small">
                              <img :src="productDetail.cake_image" class="photo" />
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div>
                              <div class="infor">
                                <h5>{{ productDetail.cake_name }}</h5>
                                <p>
                                  Mã sản phẩm: <span>{{ productDetail.cake_option }}</span>
                                </p>
                                <hr />
                                <p>
                                  Giá
                                  <span style="font-size: 20px; font-weight: bold">
                                    {{productDetail.price}}₫</span>
                                </p>
                                <hr>
                                <div>
                                  <span>Số lượng</span>
                                  <div class="soluong">
                                    <button class="btn_minus" @click="minusNumber">
                                      <v-icon class="ic">mdi-minus</v-icon>
                                    </button>
                                    <span style="width: 30px; text-align: center">{{
                                      number
                                    }}</span>
                                    <button class="btn_plus" @click="plusNumber">
                                      <v-icon class="ic">mdi-plus</v-icon>
                                    </button>
                                  </div>
                                  <div class="addCart">
                                    <button class="btnAddtocart" @click="addtoCart()">THÊM VÀO GIỎ HÀNG</button>
                                    <p class="txt_detail">
                                      <router-link :to="{ name: 'ProductDetail', params: { id: item._id} }">hoặc xem chi tiết</router-link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                  </v-overlay>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  props: {
    products: Array
  },
  data: () => ({
    products: [],
    zIndex: 1,
    overlay: false,
    productDetail: {},
    number: 1
  }),
  created() {
    this.user = JSON.parse(localStorage.getItem("User"));
  },
  methods:{
     formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      });
      },
    showDetail(id){
      this.productDetail = this.products.find(x=>x._id==id);
    },
    minusNumber() {
      if (this.number > 1) this.number--;
    },
    plusNumber() {
      this.number++;
    },
    async addtoCart(){
      await axios.post('cart/create',{
        cakeId: this.productDetail._id,
        userId: this.user.id,
        quantity: this.number
      });
      alert("Đã thêm vào giỏ của bạn!");
    },
  }
};
</script>

<style scoped>
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
}
.photo {
  width: 90%;
  height: 90%;
  margin: 5%;
}
.product_photo_small {
  margin: 0px 15px;
  width: 100px;
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