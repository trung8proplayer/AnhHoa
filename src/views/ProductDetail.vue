<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p>
            <b>{{ product.cake_name }}</b>
          </p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col cols="4">
              <div class="product_photo">
                <img :src="product.cake_image" class="photo" />
              </div>
              <div class="product_photo_small">
                <img :src="product.cake_image" class="photo" />
              </div>
            </v-col>
            <v-col cols="8">
              <div class="product_infor">
                <div class="infor">
                  <h5>{{ product.cake_name }}</h5>
                  <p>
                    Mã sản phẩm: <span>{{ product.cake_option }}</span>
                  </p>
                  <hr />
                  <p>
                    Giá
                    <span style="font-size: 20px; font-weight: bold">{{
                      formatCash(product.price.toString())
                    }}₫</span>
                  </p>
                  
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
                  </div>
                  <div class="product_tp">
                        <p>Mô tả chung:</p>
                        <p>
                          {{product.description}}
                        </p>
                  </div>
                  <div class="product_actions">
                    <button class="btnAddtocart" @click="addtoCart()">THÊM VÀO GIỎ HÀNG</button>
                    <button class="btnBuynow">MUA NGAY</button>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row class="inner" style="padding-top: 0px">
            <v-col>
              <div>
                    <button class="mtc">Bình luận</button>
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
    product: {},
    number: 1,
    id: "",
    user: {}
  }),
  async created(){
    this.id = this.$route.params.id
    const res = await axios.get(`cake/${this.id}`);
    this.product = res.data[0];
    this.user = JSON.parse(localStorage.getItem("User"));
  },
  methods: {
    minusNumber() {
      if (this.number > 1) this.number--;
    },
    plusNumber() {
      this.number++;
    },
    formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      });
    },
    async addtoCart(){
      await axios.post('cart/create',{
        cakeId: this.product._id,
        userId: this.user.id,
        quantity: this.number
      });
      alert("Đã thêm vào giỏ của bạn!");
    }
  } 
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
  height: 400px;
  border-radius: 10px;
}
.infor {
  padding: 30px 25px;
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
.ic{
  color: black;
}
.product_tp{
  padding-top: 10px;
}
.product_tp p{
  margin-bottom: 0px;
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