<template>
  <div class="home_order">
    <div>
      <v-container>
        <div class="order_form">
          <div class="order_title">
            <h3>ĐẶT ONLINE NGAY!</h3>
            <p>KHÔNG CÒN PHẢI CHỜ ĐỢI NỮA</p>
          </div>
          <v-form>
            <div class="errors order_input">
              <li>can't be blank</li>
            </div>
            <label for="contactName" style="padding-top: 10px"
              >Họ tên của bạn</label
            >
            <input
              type="text"
              placeholder="Họ tên của bạn"
              class="order_input"
              v-model="name"
            />
            <label for="contactEmail">Địa chỉ email của bạn</label>
            <input
              type="text"
              placeholder="Địa chỉ email của bạn"
              class="order_input"
              v-model="email"
            />
            <label for="contactPhone">Số điện thoại của bạn</label>
            <input
              type="text"
              placeholder="Số điện thoại của bạn"
              class="order_input"
              v-model="phone"
            />
            <label for="contactContent">Nội dung</label>
            <textarea rows="5" placeholder="Nội dung" v-model="content"></textarea>
            <div style="text-align: center">
              <button class="order_btn" @click="order()">ĐẶT NGAY</button>
            </div>
          </v-form>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "HomeOrder",
  data: () => ({
    name: "",
    email: "",
    phone: "",
    content: "",
  }),
  methods:{
    order(){
      console.log(this.name,this.email,this.phone,this.content);
      axios.post('perorder/create',{
        full_name : this.name,
        email : this.email,
        phone : this.phone,
        content: this.content
      });
      alert("Gửi liên hệ thành công.")
    }
  }
};
</script>

<style scoped>
.home_order {
  background-image: url(//theme.hstatic.net/1000313040/1000406925/14/banform.jpg?v=1757);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 50px 0px;
}
.order_form {
  width: 50%;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 10px;
}
.order_title {
  text-align: center;
}
.order_title h3 {
  font-size: 32px;
  color: #c0c906;
  margin-bottom: 0;
  font-weight: bold;
}
.order_title p {
  font-size: 19px;
  color: #fff;
  font-weight: bold;
}
.errors {
  color: #d02e2e;
  background-color: #fff6f6;
  border-color: #d02e2e;
}
.order_input,
textarea {
  border-radius: 3px;
  padding: 6px 12px;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
}
label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
}
.order_btn {
  padding: 10px 15px;
  color: #fff;
  font-weight: bold;
  background: #3d1a1a;
  border-radius: 10px;
}
.order_btn:hover {
  background-color: #c0c906;
}
</style>