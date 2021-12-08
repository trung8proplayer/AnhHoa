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
                        <tr v-for="item in order" :key="item">
                          <td>{{item.name}}</td>
                          <td>{{format_date(item.createdAt)}}</td>
                          <td>{{item.status}}</td>
                          <td>{{item.transport}}</td>
                          <td>{{formatCash(item.total.toString())}}₫</td>
                        </tr>
                      </table>
                    </v-col>
                    <v-col cols="4">
                      <h4>Thông tin tài khoản</h4>
                      <b>{{ user.firstName }} {{ user.lastName }}</b>
                      <div>
                        <p>Email: {{user.email}}</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div  v-if="!user">
                  <h3>Bạn chưa login!</h3>
                  <router-link to="/account/login"><h4>Đăng nhập</h4></router-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: "Cart",
  props: ["user"],
  data: () => ({
    userId: "",
    order: []
  }),
  async created(){
    this.$emit("getUser");
    this.userId = JSON.parse(localStorage.getItem('User')).id;
    const response = await axios.get('order/'+this.userId)
    this.order = response.data
  },
  methods:{
    format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY hh:mm:ss')
          }
      },
      formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
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
table {
  border: cadetblue;
  width: 100%;
  height: 60%;
  text-align: center;
  border-collapse: collapse;
}
</style>