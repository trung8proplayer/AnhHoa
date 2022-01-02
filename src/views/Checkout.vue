<template>
    <div>
        <v-container>
            <v-row class="infor">
            <v-col cols="7">
                <div>
                    <h4>Anh Hòa Bakery</h4>
                    <router-link to="/cart">Giỏ hàng</router-link> >
                    <router-link to="">Thông tin vận chuyển</router-link>
                    <h6>Thông tin thanh toán</h6>
                    <div class="user_infor">
                        <div style="width: 50px">
                            <v-img src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" max-width="100%"></v-img>
                        </div>
                        <div style="padding-left: 10px">
                            <p style="margin-bottom: 0px">{{user.firstName + " " + user.lastName}} ({{user.email}})</p> 
                            <router-link to="" style="margin-top: 10px">Đăng xuất</router-link>
                        </div>
                    </div>
                    <div>
                        <template>
                            <div>
                                <v-text-field
                                label="Họ và tên"
                                outlined
                                class="pt-9"
                                ></v-text-field>
                                <v-text-field label="Điện thoại" outlined :rules="rules" v-model="dt"></v-text-field>
                                <v-text-field label="Địa chỉ" outlined :rules="rules" v-model="dc"></v-text-field>
                                <v-select
                                :items="items"
                                label="Thành phố"
                                dense
                                outlined
                                height="60px"
                                v-model="tp"
                                ></v-select>
                            </div>
                        </template>
                    <v-row>
                        <v-col>
                            <router-link to="/cart">Giỏ hàng</router-link>
                        </v-col>
                        <v-col>
                            <button class="btn_checkout" @click="checkout">Thanh toán</button>
                        </v-col>
                    </v-row>
                    </div>
                </div>
            </v-col>
            <v-col cols="5">
                <div v-for="item in cart" :key="item">
                    <table>
                        <tr>
                            <td style="width: 15%"><img :src="item.cakes.cake_image" width="100%"></td>
                            <td style="padding-left: 10px; width: 70%">{{item.cakes.cake_name}}({{item.quantity}})</td>
                            <td>{{formatCash(item.cakes.price.toString())}}₫</td>
                        </tr>
                        <div style="height: 10px"></div>
                    </table>
                </div>
                    <hr>
                        <div class="tt">
                            <div >
                                <p>Giao hàng tận nơi (phí vận chuyển từ 10k - 30k)</p>
                            </div>
                            <div>
                                {{formatCash(ship.toString())}}
                            </div>
                        </div>
                    <hr>
                <v-row>
                    <v-col cols="9">
                        <v-text-field
                        label="Mã giảm giá"
                        outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <button class="btn_checkout btn_ma" type="submit">Sử dụng</button>
                    </v-col>
                </v-row>
                <hr>
                <div class="tt">
                    <div >
                        <p>Tạm tính</p>
                    </div>
                    <div>
                        {{formatCash((total+ship).toString())}}₫
                    </div>
                </div>
                <hr>
                <div class="tt">
                    <div >
                        <h6>Tổng tiền</h6>
                    </div>
                    <div>
                        {{formatCash((total+ship).toString())}}₫
                    </div>
                </div>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Checkout",
  data: () => ({
    user: "",
    items: ['Hà Nội','Hải Phòng','Đà Nẵng','Thành phố Hồ Chí Minh','Cần Thơ'],
    cart: [],
    total: 0,
    ship: 30000,
    tp: "",
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    count: 0,
    dt: "",
    dc: ""
  }),
    async created() {
    this.user = JSON.parse(localStorage.getItem("User"));
    const response = await axios.get('cart/' + this.user.id);
    this.cart = response.data;
    this.cart.forEach(element => {
    this.total += element.cakes.price * element.quantity
    });
    this.count = await (await axios.get('order/')).data.length;
  },
  methods:{
    formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      });
    },
    checkout(){
        axios.post('/order/create',{
            userId: this.user.id,
            status: "Đang chờ",
            transport: "Đang chờ",
            name: "AHB"+ this.count.toString(),
            total: this.total,
            address: this.dc + this.tp,
            phone: this.dt,
            cakes:this.cart.map(e=> e.cakes._id)
        })
        alert("Đặt hàng thành công!")
        this.$router.push("/");
        console.log(this.cart.map(e=> e._id))
    },
  } 

};
</script>
<style scoped>
.infor{
    margin-top: 50px
}
.user_infor{
    display: flex;
}
.btn_checkout{
    display: inline-block;
    border-radius: 4px;
    font-weight: 500;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    position: relative;
    background: #338dbc;
    color: white;
    margin-left: 191px;
}
.btn_ma{
    padding: 15px 14px;
    margin-left: 0px;
}
.tt{
    display: flex;
    justify-content: space-between;
}
</style>