<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p>
            <b>{{ product.pro_name }}</b>
          </p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col cols="4">
              <div class="product_photo">
                <img :src="product.pro_img" class="photo" />
              </div>
              <div class="product_photo_small">
                <img :src="product.pro_img" class="photo" />
              </div>
            </v-col>
            <v-col cols="8">
              <div class="product_infor">
                <div class="infor">
                  <h5>{{ product.pro_name }}</h5>
                  <p>
                    Mã sản phẩm: <span>{{ product.pro_id }}</span>
                  </p>
                  <hr />
                  <p>
                    Giá
                    <span style="font-size: 20px; font-weight: bold">{{
                      product.pro_price
                    }}</span>
                  </p>
                  <!-- <form action=""> -->
                  
                  <br />
                  <div>
                    <span>Số lượng</span>
                    <div class="soluong">
                      <button class="btn_minus" @click="minusNumber">
                        <v-icon>mdi-minus</v-icon>
                      </button>
                      <span style="width: 30px; text-align: center">{{
                        number
                      }}</span>
                      <button class="btn_plus" @click="plusNumber">
                        <v-icon>mdi-plus</v-icon>
                      </button>
                    </div>
                  </div>
                  <div>
                        <p>Thành phần chính:</p>
                        <p>- Gato</p>
                        <p>- Kem tươi vị rượu rum</p>
                        <p>- Hoa quả</p>
                        <p>- Dừa khô.</p>
                        <p>
                          Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi
                          vị rượu rum (nho). Trên mặt bánh được trang trí bằng
                          hoa quả với dừa khô kết xung quanh.
                        </p>
                  </div>
                  <div class="product_actions">
                    <button class="btnAddtocart">THÊM VÀO GIỎ HÀNG</button>
                    <button class="btnBuynow">MUA NGAY</button>
                  </div>
                  
                  <!--  </form> -->
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row class="inner" style="padding-top: 0px">
            <v-col>
              <div>
                <v-tabs v-model="tab" style="width: 340.32px">
                  <v-tab>
                    <button class="mtc">Mô tả chung</button>
                  </v-tab>
                  <v-tab>
                    <button class="mtc">Bình luận</button>
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    
                  </v-tab-item>
                  <v-tab-item>
                    <v-card>
                      <v-card-text>
                        <h6>0 Comments</h6>
                        <br />
                        <hr />
                        <input
                          type="textarea"
                          placeholder="Add a comment..."
                          class="ip_comment"
                        />
                        <button class="post">Post</button>
                        <hr />
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data: () => ({
    product: {
      pro_img:
        "//product.hstatic.net/1000313040/product/53_c2a32321b1c4417d89a727f048d06659_master.png",
      pro_name: "FRUIT CAKE",
      pro_id: "KT017",
      pro_price: "220,000₫",
    },
    number: 1,
    tab: null,
    isActive: false,
  }),
  methods: {
    async getProductbyID() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      this.product = res.data;
      console.log(this.product);
    },
    minusNumber() {
      if (this.number > 1) this.number--;
    },
    plusNumber() {
      this.number++;
    },
  } /* 
    async created(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
            this.product = res.data
            console.log(this.product)
    } */,
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
.product_photo,
.product_infor,
.product_photo_small {
  background-color: #fff;
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
}
.product_infor {
  height: 600px;
  border-radius: 10px;
}
.infor {
  padding: 30px 25px;
}
option {
  border: solid 1px;
  border-radius: 10px;
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
}
option:active{
    background-color: red;
}
.soluong {
  display: inline-flex;
  margin-left: 10px;
  border: solid 1px;
  border-radius: 5px;
}
.btn_minus {
  border-right: 1px solid;
}
.btn_plus {
  border-left: 1px solid;
}
.product_actions {
  padding-top: 30px;
  font-weight: bold;
}
.btnAddtocart {
  background: #3d1a1a;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
}
.btnBuynow {
  background: #c0c906;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  margin-left: 10px;
}
.mtc {
  padding: 10px 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #3d1a1a;
  color: #c0c906;
}
.ip_comment {
  border: solid 1px;
  width: 100%;
  height: 80px;
  padding-left: 10px;
  position: relative;
}
.post {
  background-color: #4267b2;
  color: white;
  padding: 5px;
  position: absolute;
  bottom: 0px;
  right: 20px;
}
</style>