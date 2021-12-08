<template>
    <div>
        <v-container>
            <v-row class="infor">
            <v-col cols="7">
                <div>
                    <h4>Anh Hòa Bakery</h4>
                    <router-link to="">Giỏ hàng</router-link> >
                    <router-link to="">Thông tin vận chuyển</router-link> >
                    <router-link to="">Phương thức thanh toán</router-link> >
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
                    <v-form>
                        <template>
                            <div>
                                <v-text-field
                                label="Họ và tên"
                                :rules="rules"
                                hide-details="auto"
                                ></v-text-field>
                                <v-text-field label="Điện thoại"></v-text-field>
                            </div>
                        </template>
                    </v-form>
                </div>
            </v-col>
            <v-col cols="5">
                
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  name: "Checkout",
  data: () => ({
    user: "",
  }),
  created() {
    this.user = JSON.parse(localStorage.getItem("User"));
  },
};
</script>
<style scoped>
.infor{
    margin-top: 50px
}
.user_infor{
    display: flex;
}
</style>