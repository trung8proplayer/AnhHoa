<template>
  <div>
    <v-main class="footer_top">
      <div class="ft_overlay"></div>
      <v-container class="wrapper">
        <v-row style="padding: 30px">
          <v-col class="ft_contact">
            <div>
              <a href="">
                <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/logo_ft.png?v=1757"
                  alt=""
                />
              </a>
            </div>
            <div>
              <v-icon>mdi-home</v-icon
              ><span
                >Số 09 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà
                Nội</span
              >
            </div>
            <div>
              <v-icon>mdi-cellphone</v-icon>
              <a href=""><span>0961452578</span></a>
            </div>
            <div>
              <v-icon>mdi-email</v-icon>
              <a href=""><span>info@anhhoabakery.vn</span></a>
            </div>
          </v-col>
          <v-col class="ft_chinhsach">
            <div class="title">
              <h5>CHÍNH SÁCH</h5>
            </div>
            <ul>
              <li>Chính sách và quy định chung</li>
              <li>Chính sách giao dịch, thanh toán</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách vận chuyển</li>
            </ul>
          </v-col>
          <v-col>
            <div class="title">
              <h5>ANH HÒA BAKERY</h5>
            </div>
            <p>
              Tên đơn vị: Công ty Cổ phần Bánh ngọt Anh Hòa Số giấy chứng nhận
              đăng ký kinh doanh: 0104802706 Ngày cấp: 21/07/2010 Nơi cấp: Sở Kế
              hoạch và Đầu tư Tp. Hà Nội
            </p>
            <form action="">
              <div>
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  class="ip_email"
                />
                <span>
                  <button type="submit"><v-icon>mdi-send</v-icon></button>
                </span>
              </div>
            </form>
            <div class="ft_social">
              <a href=""><v-icon>mdi-facebook</v-icon></a>
              <a href=""><v-icon>mdi-twitter</v-icon></a>
              <a href=""><v-icon>mdi-instagram</v-icon></a>
              <a href=""><v-icon>mdi-google-plus</v-icon></a>
              <a href=""><v-icon>mdi-youtube</v-icon></a>
            </div>
          </v-col>
          <v-col>
            <div class="title">
              <h5>
                MỖI THÁNG CHÚNG TÔI ĐỀU CÓ NHỮNG ĐỢT GIẢM GIÁ DỊCH VỤ VÀ SẢN
                PHẨM NHẰM TRI ÂN KHÁCH HÀNG. ĐỂ CÓ THỂ CẬP NHẬT KỊP THỜI NHỮNG
                ĐỢT GIẢM GIÁ NÀY, VUI LÒNG NHẬP ĐỊA CHỈ EMAIL CỦA BẠN VÀO Ô DƯỚI
                ĐÂY
              </h5>
            </div>
            <div>
              <a href="">
                <img
                  src="https://theme.hstatic.net/1000313040/1000406925/14/hg_img_thumb1.png?v=1757"
                  alt=""
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-main class="footer_bottom">
      <v-container>
        <v-row>
          <v-col class="ft_copy">
            <span>Copyrights © 2018 by</span>
            <a href="">Anhhoa Bakery</a>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "HomeProducts",
  data: () => ({}),
};
</script>

<style scoped>
.footer_top {
  background: url(//theme.hstatic.net/1000313040/1000406925/14/footer-bg.png?v=1757);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: #ffffff;
  padding: 50px 0px;
}
.ft_overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}
.ft_contact div {
  padding-top: 10px;
}
.v-icon {
  color: #ffffff;
  font-size: 20px;
}
.ft_contact span {
  color: white;
  padding-left: 5px;
}
.wrapper {
  position: relative;
  z-index: 2;
}
.title {
  padding-top: 15px;
}
.ft_chinhsach ul {
  list-style-type: none;
  padding: 20px 0px;
}
.ft_chinhsach ul li {
  padding-bottom: 10px;
}
.ip_email {
  height: 40px;
  line-height: 40px;
  padding: 0px 15px;
  background: transparent;
  border: 0px;
  border-bottom: 1px solid #ffffff;
  outline: 0px;
  color: #ffffff;
}
.ip_email::placeholder {
  color: white;
}
.ft_social .v-icon {
  font-size: 25px;
  padding: 20px 5px;
}
.ft_social a {
  text-decoration: none;
}
.ft_social a:hover .v-icon {
  color: #c0c906;
}
.footer_bottom {
  background: #421a1f;
  padding: 15px 0px;
}
.ft_copy {
  color: white;
}
.ft_copy a {
  color: white;
  padding-left: 5px;
  text-decoration: none;
}
.ft_copy a:hover {
  color: #c0c906;
}
</style>