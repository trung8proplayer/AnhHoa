<template>
  <div class="banner_account">
    <div>
      <div class="overlay_account"></div>
      <v-main>
        <div class="title_account">
          <p>
            <b>KẾT QUẢ TÌM KIẾM "{{ key_search.toUpperCase() }}" - ANH HÒA BAKERY</b>
          </p>
        </div>
        <div class="form_account">
          <v-row class="inner">
            <v-col>
              <div>
                <h4><b>KẾT QUẢ TÌM KIẾM CHO "{{key_search.toUpperCase()}}":</b></h4>
                <hr />
                <hr />
               <product-card :products="products"  />
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
import ProductCard from './ProductCard.vue'
export default {
  name: "SearchProducts",
  components:{
    ProductCard
  },
  data: () => ({
    key_search: "",
    products: [],
  }),
  async created() {
    this.key_search = this.$route.query.query;
    const response = await axios.get('cake/search',{params:{query: this.key_search}});
    this.products = response.data.cakes;
    console.log(this.products)
  },
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
</style>