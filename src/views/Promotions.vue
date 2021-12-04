<template>
<div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
         <div class="title_account">
          <p><b>KHUYẾN MẠI</b></p>
        </div>
        <div class="form_account">
            <v-row class="inner">
                    <v-col v-for="item in products.promotions" :key="item">
                        <v-card class="mx-auto" max-width="270px" >
                        <router-link
                            :to="{ name: 'ProductDetail', params: { promotionName: item.promotion_name } }"
                        >
                            <v-img
                            class="white--text align-end"
                            height="255px"
                            :src="item.promotion_image"
                            >
                            </v-img>
                        </router-link>
                        <div class="title">
                            <router-link to="" class="title_name"
                            ><h6 style="font-weight: bold">{{item.promotion_name}}</h6></router-link
                            >
                            <small class="promotion-content">{{item.content}}</small>
                        </div>
                        </v-card>
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
  name: "Promotions",
  data: () => ({
    products: [],
  }),
  async created() {
    const response = await axios.get("Promotions");
    this.products = response.data;
    console.log(this.products)
  },
}
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
.promotion-content{
  color: #333333;
  padding-top: 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
  font-size: 13px;
}
</style>