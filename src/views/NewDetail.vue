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
                <v-col cols="12">
                    <div class="new-infor">
                       <h3 class="new-title"> {{product.title}}</h3>
                       <v-img
                            class="white--text align-end"
                            height="600px"
                            width="600px"
                            :src="product.new_image"
                            >
                        </v-img>
                        <span class="new-content">
                            {{product.content}}
                        </span>
                    </div>
                      
                </v-col>  
            </v-row>
        </div>
      </v-main>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "NewDetail",
  data: () => ({
    product: {},
    number: 1,
    id: "",
    user: {}
  }),
  async created(){
    this.id = this.$route.params.id
    const res = await axios.get(`news/${this.id}`);
    this.product = res.data[0];
    console.log(this.product);
    this.user = JSON.parse(localStorage.getItem("User"));
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

.new-infor{
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.new-title{
    padding: 30px 0px;
    text-align: center;
}
.new-content{
    width: 600px;
    text-align:justify;
    padding: 30px ;
}
</style>
