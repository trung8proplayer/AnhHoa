<template>
<div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
         <div class="title_account">
          <p><b>TIN TỨC</b></p>
        </div>
        <div class="form_account">
            <v-row class="inner">
                    <v-col cols="4" v-for="item in products" :key="item">
                        <v-card class="mx-auto">
                        <router-link
                            :to="{ name: 'ProductDetail', params: { newTitle: item.new_title } }"
                        >
                            <v-img
                            class="white--text align-end"
                            :src="item.new_image"
                            >
                            </v-img>
                        </router-link>
                        <div class="title">
                            <router-link to="" class="title_name"
                            ><h6 style="font-weight: bold">{{item.title}}</h6></router-link
                            >
                            <small class="new-content">{{item.content}}</small>
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
  name: "News",
  data: () => ({
    products: [],
  }),
  async created() {
    const response = await axios.get("news");
    this.products = response.data;
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
.new-content{
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