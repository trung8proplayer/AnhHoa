<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p><b>TÀI KHOẢN</b></p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col>
              <div>
                <h4><b>TÀI KHOẢN CỦA BẠN</b></h4>
                <hr />
                <hr />
                <div v-if="user">
                  <v-row>
                    <v-col cols="8">
                      <h4>Lịch sử giao dịch</h4>
                      <table border="1">
                        <tr>
                          <th><b>Đơn hàng</b></th>
                          <th><b>Ngày</b></th>
                          <th><b>Tình trạng thanh toán</b></th>
                          <th><b>Tình trạng vận chuyển</b></th>
                          <th><b>Tổng</b></th>
                        </tr>
                        <tr v-for="dh in donhangs" :key="dh.donhang">
                          <td>{{ dh.donhang }}</td>
                          <td>{{ dh.ngay }}</td>
                          <td>{{ dh.tttt }}</td>
                          <td>{{ dh.ttvc }}</td>
                          <td>{{ dh.tong }}</td>
                        </tr>
                      </table>
                    </v-col>
                    <v-col cols="4">
                      <h4>Thông tin tài khoản</h4>
                      <b>{{ users.name }} {{ users.last_name }}</b>
                      <p>{{ users.cong_ty }}</p>
                      <p>{{ users.dia_chi }}</p>
                      <p>{{ users.quoc_gia }}</p>
                      <p>{{ users.sdt }}</p>
                      <a href="" style="color: brown">Xem địa chỉ</a>
                    </v-col>
                  </v-row>
                </div>
                <h3 v-if="!user">Bạn chưa login</h3>
              </div>
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
    donhangs: [
      {
        donhang: "AH-109857",
        ngay: "10/14/2021 13:09:39",
        tttt: "pending",
        ttvc: "not fulfilled",
        tong: "1,020,000₫",
      },
      {
        donhang: "AH-109763",
        ngay: "10/14/2021 13:09:39",
        tttt: "success",
        ttvc: "success",
        tong: "990,000₫",
      },
      {
        donhang: "AH-109857",
        ngay: "10/14/2021 13:09:39",
        tttt: "pending",
        ttvc: "not fulfilled",
        tong: "1,020,000₫",
      },
    ],
    users: {
      name: "Trung",
      last_name: "Lê",
      cong_ty: "123 Cầu Giấy, Hà Nội",
      dia_chi: "A5 Xuân Thủy, Hà Nội",
      quoc_gia: "Vietnam",
      sdt: "012345678",
    },
  }),
  created(){
    this.$emit("getUser");
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
table {
  border: cadetblue;
  width: 100%;
  height: 60%;
  text-align: center;
  border-collapse: collapse;
}
</style>