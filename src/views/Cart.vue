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
                <div>
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
                    v-for="item in products"
                    :key="item"
                  >
                    <v-col cols="7">
                      <v-row>
                        <v-col><img :src="item.pro_img" width="75%" /></v-col>
                        <v-col>
                          <div class="item_column">
                            <h4>{{ item.pro_name }}</h4>
                            <p>{{ item.pro_width }} cm</p>
                            <button>Xóa</button>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h4>{{ item.pro_price }}</h4>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h5>{{ item.pro_num }}</h5>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="item_column">
                        <h4>{{ item.pro_total }}</h4>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row class="inner2">
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
              <span style="font-size: 1.5rem; font-weight: bold">660,000₫</span>
              <p><i>Vận chuyển</i></p>
              <button class="update_cart">Cập nhật</button>
              <button class="checkout_cart">Thanh toán</button>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>


<script>
export default {
  name: "Cart",
  props: ["user"],
  data: () => ({
    products: [
      {
        pro_img:
          "https://product.hstatic.net/1000313040/product/53_c2a32321b1c4417d89a727f048d06659_large.png",
        pro_name: "FRUIT CAKE",
        pro_width: "19",
        pro_price: "220,000₫",
        pro_num: 1,
        pro_total: "220,000₫",
      },
      {
        pro_img:
          "https://product.hstatic.net/1000313040/product/53_c2a32321b1c4417d89a727f048d06659_large.png",
        pro_name: "TIRAMISU VUÔNG",
        pro_width: "19",
        pro_price: "220,000₫",
        pro_num: 1,
        pro_total: "220,000₫",
      },
      {
        pro_img:
          "https://product.hstatic.net/1000313040/product/53_c2a32321b1c4417d89a727f048d06659_large.png",
        pro_name: "BLUE BERRY CHOCOLATE CAKE",
        pro_width: "20x20",
        pro_price: "220,000₫",
        pro_num: 1,
        pro_total: "220,000₫",
      },
    ],
  }),
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