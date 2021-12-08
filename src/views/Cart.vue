<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p><b>GIỎ HÀNG CỦA BẠN - ANH HÒA BAKERY</b></p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col>
              <div>
                <h4><b>GIỎ HÀNG</b></h4>
                <hr />
                <hr />
                <div v-if="user">
                  <v-row class="name_column">
                    <v-col cols="7">
                      <p>Thông tin chi tiết sản phẩm</p>
                    </v-col>
                    <v-col><p>Đơn giá</p></v-col>
                    <v-col><p>Số lượng</p></v-col>
                    <v-col><p>Tổng giá</p></v-col>
                  </v-row>
                  <v-row
                    class="name_column"
                    v-for="item in cart"
                    :key="item"
                  >
                    <v-col cols="7">
                      <v-row>
                        <v-col><img :src="item.cakes.cake_image" width="75%" /></v-col>
                        <v-col>
                          <div class="item_column">
                            <h4>{{ item.cakes.cake_name }}</h4>
                            <button @click.prevent="RemoveCake(item.cakes._id)">Xóa</button>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h4>{{ formatCash(item.cakes.price.toString()) }}₫</h4>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h5>{{item.quantity}}</h5>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h4>{{ formatCash((item.cakes.price * item.quantity).toString()) }}₫</h4>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <div v-if="!user">
                <p>Bạn cần đăng nhập để xem giỏ hàng!</p>
              </div>
            </v-col>
          </v-row>
          <v-row class="inner2" v-if="user">
            <v-col cols="8">
              <p>
                <b
                  >Quý khách xin vui lòng nhập thông tin: Họ tên, Ngày tháng năm
                  sinh, Địa chỉ nhận, Thời gian nhận bánh và Số điện thoại liên
                  hệ.</b
                >
              </p>
              <textarea></textarea>
            </v-col>
            <v-col cols="4" class="total">
              Tổng tiền
              <span style="font-size: 1.5rem; font-weight: bold">{{formatCash(total.toString())}}₫</span>
              <p><i>Vận chuyển</i></p>
              <button class="checkout_cart" @click="checkout()">Thanh toán</button>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: "Cart",
  props: ["user"],
  data: () => ({
    cart: [],
    total: 0,
    userId: ""
  }),
  async created(){
    this.userId = JSON.parse(localStorage.getItem("User")).id;
    const response = await axios.get('cart/' + this.userId);
    this.cart = response.data;
    this.cart.forEach(element => {
    this.total += element.cakes.price * element.quantity
    });
  },
  methods:{
    formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      });
    },
    checkout(){
      this.$router.push("/checkout");
    },
    RemoveCake(cakeid){
      axios.delete('cart/delete',{
      data:{
              userId : this.userId,
              cakeId: cakeid
            }
      }).then(()=>{
        for (const [index, item] of this.cart.entries()) {
          if(item.cakes._id==cakeid){
            this.cart.splice(index,1);
            break;
          }
        }
      });
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
.name_column {
  text-align: center;
  border-bottom: 1px solid gray;
}
.item_column {
  padding: 60px 15px;
}
.inner2 {
  padding: 0px 180px 50px 180px;
}
.inner2 textarea {
  border: 1px solid;
  width: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  background-color: white;
  height: 120px;
}
.total {
  text-align: end;
}
.inner2 button {
  border-radius: 3px;
  background-color: #3d1a1a;
  color: #fff;
  display: inline-block;
  padding: 8px 10px;
  font-weight: bold;
  margin-left: 5px;
}
</style>