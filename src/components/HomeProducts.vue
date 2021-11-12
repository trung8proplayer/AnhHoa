<template>
    <div>
        <div class="banner">
            <template>
                <v-carousel
                    cycle
                    height="auto"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <a href="">
                        <v-carousel-item v-for="item in imgs" :key="item">
                        <v-img :src="item"></v-img>
                        </v-carousel-item>
                    </a>
                </v-carousel>
            </template>
        </div>
        <v-main style="background-color: #f8f2e8">
            <v-container class="products">
                <div class="products_title">
                    <h3>BỘ SƯU TẬP BÁNH KEM 20/11</h3>
                    <h2><img src="//theme.hstatic.net/1000313040/1000406925/14/home_line_collection1.png?v=1757" alt=""></h2>
                </div>
                <v-row v-for="n in 3" :key="n">
                    <v-col v-for="n in 4" :key="n" >
                        <v-card
                            class="mx-auto"
                            max-width="270px"
                        >
                            <v-img
                            class="white--text align-end"
                            height="255px"
                            src="https://product.hstatic.net/1000313040/product/53_c2a32321b1c4417d89a727f048d06659_large.png"
                            >
                            </v-img>
                            <div class="title">
                                <a href="" class="title_name"><h6 style="font-weight: bold">RED VELVET</h6></a>
                                <h6>KT017</h6>
                            </div>
                            <div>
                                <div class="product_price">
                                    220,000₫
                                </div>
                                <div class="product_actions">
                                    <button><v-icon style="color: white">mdi-cart</v-icon></button>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="btn_view-more">
                            <a href="">Xem thêm</a>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    name: 'HomeProducts',
    data: () => ({
       imgs: ["//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img2.jpg?v=1757",
               "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img3.jpg?v=1757",
               "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img4.jpg?v=1757",
               "//theme.hstatic.net/1000313040/1000406925/14/ms_banner_img5.jpg?v=1757"],
    }),
}
</script>

<style scoped>
.products_title{
    text-align: center;
    padding: 30px;
}
.products_title h3{
    font-size: 32px;
    color: #c0c906;
    margin-bottom: 0;
    font-weight: bold;
}
.title{
    text-align: center;
}
.title_name{
    color: #333333;
    padding-top: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.product_price{
    display: inline-block;
    padding: 0px 15px;
    height: 40px;
    line-height: 40px;
    background: #c0c906;
    color: #fff;
    border-top-right-radius: 10px;
    position: relative;
    z-index: 2;
}
.product_actions{
    display: inline-block;
    position: relative;
    z-index: 1;
}
.product_actions button{
    height: 40px;
    line-height: 40px;
    width: 45px;
    padding: 0px;
    margin: 0px 0px 0px -7px;
    background: #3d1a1a;
    color: #fff;
    border: 0px;
    outline: 0px;
    border-top-right-radius: 10px;
}
.btn_view-more{
    margin: 20px 0px;
    text-align: center;
}
.btn_view-more a {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 10px;
    color: #fff;
    background: #3d1a1a;
}
</style>