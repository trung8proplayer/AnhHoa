<template>
    <div class="banner_account">
        <div>
            <div class="overlay_account">
            </div>
            <v-main>
                <div class="title_account">
                    <p><b>TÀI KHOẢN</b></p>
                </div>
                <div class="form_account">
                        <v-row class="inner">
                            {{product.userId}}
                        </v-row>
                </div>
            </v-main>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'ProductDetail',
    data: () => ({
        product: {}
    }),
    /* methods: {
        async getProductbyID({params:{id}}){
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            this.product = res.data;
            console.log(this.product)
        }
        
    } */
    async created(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
            this.product = res.data
            console.log(this.product)
    }
}
</script>

<style scoped>
    .banner_account{
        background: url(//theme.hstatic.net/1000313040/1000406925/14/breadcrumb_bg.png?v=1757);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        overflow: hidden;
    }
    .overlay_account{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .title_account{
        text-align: center;
        color: white;
        padding: 120px 0px;
        font-size: 35px;
    }
    .form_account{
        background: #f8f2e8;
    }
    .inner{
        padding: 50px 180px
    }
</style>