<template>
    <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p><b>HỆ THỐNG CỬA HÀNG</b></p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col>
              <div>
                <h4><b>HỆ THỐNG CỬA HÀNG</b></h4>
                <hr>
                <div v-for="item in products.stores" :key="item">
                  <v-row>
                    <v-col cols="6">
                      <p class="name-store">
                        {{products.stores.indexOf(item)+1}}.{{ item.store_name}}
                      </p>
                      <v-img
                        class="white--text align-end"
                        height="500px"
                        :src="item.store_image"
                      >
                      </v-img>
                    </v-col>
                    <v-col>
                      <div class="contact-content">
                        <span class="contact">
                         <v-icon class="home">mdi-home</v-icon>
                         <p>{{item.store_address}}</p>
                        </span>
                        <span class="contact">
                          <v-icon class="phone">mdi-phone</v-icon>
                          <p>{{item.phone}}</p>
                        </span>
                        <iframe :src="item.map" width="510" height="390" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                      </div>       
                    </v-col>
                  </v-row>
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
import axios from "axios"
export default {
  name: "StoreProducts",
  data: () => ({
    products: [],
  }),
  async created() {
    const response = await axios.get("store");
    this.products = response.data;
  },
}
</script>
<style>
.banner_account {
  background: url(//theme.hstatic.net/1000313040/1000406925/14/breadcrumb_bg.png?v=1757);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.name-store{
  font-size: 20px;
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
.contact-content{
  display: flex;
  flex-direction: column;
  margin-left: 57px;
  margin-top: 40px;
}
.contact{
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.contact p{
  margin: 0px;
  padding-left: 10px;
}
.contact .home{
  color:orange;
}
.contact .phone{
  color:green;
}

</style>
