<template>
    <!-- product view -->
    <div class="container grid grid-cols-2 gap-6">
        <!-- product image -->
        <div>
            <img src="../assets/images/products/chair.jpg" alt="chair" class="w-full">
            <div class="grid grid-cols-5 gap-4 mt-4">
                <img src="../assets/images/products/chair.jpg" alt="chair" class="w-full cursor-pointer border border-primary">
                <img src="../assets/images/products/chair2.jpg" alt="chair" class="w-full cursor-pointer border">
                <img src="../assets/images/products/chair9.jpg" alt="chair" class="w-full cursor-pointer border">
                <img src="../assets/images/products/chair10.jpg" alt="chair" class="w-full cursor-pointer border">
                <img src="../assets/images/products/chair3.jpg" alt="chair" class="w-full cursor-pointer border">
            </div>
        </div>
        <!-- product image end -->

        <!-- product content -->
        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availibility:</span>
                    <span class="text-green-600">In Stock</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand:</span>
                    <span class="text-gray-600">Apex</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category:</span>
                    <span class="text-gray-600">Sofa</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">SKU:</span>
                    <span class="text-gray-600">BE45VGRT</span>
                </p>
            </div>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p class="text-2xl text-primary font-semibold">$45.00</p>
                <p class="text-base text-gray-600 line-through">$55.00</p>
            </div>
            <p class="mt-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil reprehenderit maxime amet,
                expedita.
            </p>
            <!-- size filter -->
            <div class="pt-4">
                <h3 class="text-sm text-gray-800 mb-1 uppercase">Size</h3>
                <div class="flex items-center gap-2">
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xs">
                        <label for="size-xs"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-500">
                            XS
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-s">
                        <label for="size-s"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-500">
                            S
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-m" checked>
                        <label for="size-m"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-500">
                            M
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-l">
                        <label for="size-l"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-500">
                            L
                        </label>
                    </div>
                    <!-- single size end -->
                </div>
            </div>
            <!-- size filter -->

            <!-- color filter -->
            <div class="pt-4">
                <h3 class="text-sm text-gray-800 mb-1 uppercase">Color</h3>
                <div class="flex items-center gap-2">
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-red" checked>
                        <label for="color-red"
                            class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                            style="background-color: #fc3d57;">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-white">
                        <label for="color-white"
                            class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                            style="background-color: #fff;">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-black">
                        <label for="color-black"
                            class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                            style="background-color: #000;">
                        </label>
                    </div>
                    <!-- single color end -->
                </div>
            </div>
            <!-- color filter end -->

            <!-- quantity -->
            <div class="mt-4">
                <h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divider-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
            <!-- quantity end -->

            <!-- cart button -->
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a href="#"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i class="fas fa-shopping-bag"></i> Add to cart
                </a>
                <a href="#"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                    <i class="fas fa-heart"></i>Wishlist
                </a>
            </div>
            <!-- cart button end -->
            <!-- social share -->
            <div class="flex gap-3 mt-4">
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <!-- social share end -->
        </div>
        <!-- product content end -->
    </div>
    <!-- product view end -->
</template>

<script>
    export default {
        name: 'ProductView'
    }
</script>