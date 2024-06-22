<template>
    <div class="row">
        <div v-for="product in products" class="col-xl-4 col-lg-6 col-6 ">
            <div class="products-three-single w-100  mt-30">
                <div class="products-three-single-img"><a
                    href="shop-details-3.html" class="d-block">
                    <img
                        :src="product.image[0].url"
                        class="first-img h-75" alt=""/> <img
                    src="/src/assets/images/home-three/productss2-hover-1.png"
                    alt="" class="hover-img"/>
                </a>
                    <div class="products-grid-one__badge-box"> <span
                        class="bg_base badge new ">New</span>
                    </div>
                    <a href="cart.html" class="addcart btn--primary style2">
                        Add To Cart </a>
                    <div class="products-grid__usefull-links">
                        <ul>
                            <li><a href="wishlist.html"> <i
                                class="flaticon-heart">
                            </i> <span>
                                                                            wishlist</span> </a></li>
                            <li><a href="compare.html"> <i
                                class="flaticon-left-and-right-arrows"></i>
                                <span>
                                                                            compare</span> </a></li>
                            <li><a @click.prevent="getProduct(product.id)"
                                   :href="`#popup${product.id}`"
                                   class="popup_link"> <i
                                class="flaticon-visibility"></i>
                                <span> quick view</span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div :id="`popup${product.id}`"
                     class="product-gird__quick-view-popup mfp-hide">
                    <div v-if="popupProduct" class="container">
                        <div class="row justify-content-between">
                            <div class="col-lg-6">
                                <div class="quick-view__left-content">
                                    <div class="tabs">
                                        <div class="popup-product-thumb-box">
                                            <ul>
                                                <li v-for="imagePop in popupProduct.image"
                                                    class="tab-nav popup-product-thumb">
                                                    <a :href="`#tabb${imagePop.id}`">
                                                        <img :src="imagePop.url"
                                                             alt=""/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="popup-product-main-image-box">
                                            <div v-for="imagePop in popupProduct.image" :id="`tabb${imagePop.id}`"
                                                 class="tab-item popup-product-image">
                                                <div class="popup-product-single-image">
                                                    <img :src="imagePop.url"
                                                         alt=""/>
                                                </div>
                                            </div>

                                            <button class="prev"><i
                                                class="flaticon-back"></i>
                                            </button>

                                            <button class="next"><i
                                                class="flaticon-next"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="popup-right-content">
                                    <h3>{{ popupProduct.title }}</h3>
                                    <div class="ratting"><i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i>
                                        <i class="flaticon-star"></i> <i
                                            class="flaticon-star"></i>
                                        <span>(112)</span></div>
                                    <p class="text"> {{
                                            popupProduct.description
                                        }}
                                    </p>
                                    <div class="price">
                                        <h2> {{ popupProduct.price }}р.
                                            <del> {{
                                                    popupProduct.old_price
                                                }}р.
                                            </del>
                                        </h2>
                                        <h6> Оригинал</h6>
                                    </div>

                                    <template v-if="popupProduct.product_sub">
                                        <div>
                                            <a @click.prevent="getProduct(prosub.id)"
                                               v-for="prosub in popupProduct.product_sub"
                                               href="#0" class=""
                                               style="width:20px; height:20px;">
                                                <img :src="prosub.image.url"
                                                     width="50px"
                                                     height="50px"/>
                                            </a>
                                        </div>
                                    </template>

                                    <div class="add-product">
                                        <h6>Qty:</h6>
                                        <div class="button-group">
                                            <div class="qtySelector text-center">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue"
                                                                                                   value="1"/>
                                                <span class="increaseQty"> <i
                                                    class="flaticon-plus"></i>
                                                                                    </span></div>
                                            <button class="btn--primary "> Add
                                                to
                                                Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div class="payment-method"><a href="#0">
                                        <img
                                            src="/src/assets/images/payment_method/method_1.png"
                                            alt=""> </a>
                                        <a href="#0"> <img
                                            src="/src/assets/images/payment_method/method_2.png"
                                            alt=""> </a> <a href="#0"> <img
                                            src="/src/assets/images/payment_method/method_3.png"
                                            alt=""> </a>
                                        <a href="#0"> <img
                                            src="/src/assets/images/payment_method/method_4.png"
                                            alt=""> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--                                                        <div class="products-three-single-content text-center">-->
                <!--                                                            <span>TITLE</span>-->
                <!--                                                            <h5><a href="shop-details-3.html"> Trendy stylish shoes </a>-->
                <!--                                                            </h5>-->
                <!--                                                            <p>-->
                <!--                                                                <del>{{ product.old_price }}</del>-->
                <!--                                                                {{ product.price }}-->
                <!--                                                            </p>-->
                <!--                                                        </div>-->
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
</style>

