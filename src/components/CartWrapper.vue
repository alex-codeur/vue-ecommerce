<template>
    <!-- cart wrapper -->
    <div class="container gap-6 grid grid-cols-12 items-start pb-16 pt-4">
        <!-- cart form -->
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <div class="flex items-center justify-between bg-gray-300 p-4">
                <p class="text-lg">Product</p>
                <p></p>
                <p class="text-lg">Quantity</p>
                <p class="text-lg">Total</p>
            </div>

            <!-- Single product -->
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <!-- product image -->
                <div class="w-28 flex-shrink-0">
                    <img src="../assets/images/products/chair.jpg" alt="product" class="w-full">
                </div>
                <!-- product image end -->

                <!-- product content -->
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-lg font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <div class="text-primary text-lg font-semibold">$45.00</div>
                    <p class="text-gray-500 text-sm">
                        Size: M
                    </p>
                </div>
                <!-- product content end -->

                <!-- quantity -->
                <div class="mt-4">
                    <div class="flex border border-gray-300 text-gray-600 divide-x divider-gray-300 w-max">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>
                <!-- quantity end -->
                <div class="text-primary text-lg font-semibold">$320.00</div>
                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Single product end -->
            <!-- Single product -->
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <!-- product image -->
                <div class="w-28 flex-shrink-0">
                    <img src="../assets/images/products/chair2.jpg" alt="product" class="w-full">
                </div>
                <!-- product image end -->

                <!-- product content -->
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-lg font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <div class="text-primary text-lg font-semibold">$45.00</div>
                    <p class="text-gray-500 text-sm">
                        Size: M
                    </p>
                </div>
                <!-- product content end -->

                <!-- quantity -->
                <div class="mt-4">
                    <div class="flex border border-gray-300 text-gray-600 divide-x divider-gray-300 w-max">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>
                <!-- quantity end -->
                <div class="text-primary text-lg font-semibold">$320.00</div>
                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Single product end -->
            <!-- Single product -->
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <!-- product image -->
                <div class="w-28 flex-shrink-0">
                    <img src="../assets/images/products/chair9.jpg" alt="product" class="w-full">
                </div>
                <!-- product image end -->

                <!-- product content -->
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-lg font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <div class="text-primary text-lg font-semibold">$45.00</div>
                    <p class="text-gray-500 text-sm">
                        Size: M
                    </p>
                </div>
                <!-- product content end -->

                <!-- quantity -->
                <div class="mt-4">
                    <div class="flex border border-gray-300 text-gray-600 divide-x divider-gray-300 w-max">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>
                <!-- quantity end -->
                <div class="text-primary text-lg font-semibold">$320.00</div>
                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Single product end -->
        </div>
        <!-- cart form end -->
        
        <!-- sidebar -->
        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-600 text-lg mb-4 font-medium uppercase">Order Summary</h4>
            <div class="space-y-2">
                <div class="flex justify-between border-gray-200 text-gray-800 font-medium py-3">
                    <p class="text-lg">Subtotal</p>
                    <p>$320</p>
                </div>
                <div class="flex justify-between border-gray-200 text-gray-800 font-medium py-3">
                    <p class="text-lg">Delivery</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
                    <p class="text-lg">Tax</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between text-gray-800 font-medium py-3 uppercase">
                    <p class="font-semibold">Total</p>
                    <p>$320</p>
                </div>
                <!-- searchbar -->
                <div class="w-full max-w-xl relative flex">
                    <input type="text" class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="Coupon">
                    <button class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Apply</button>
                </div>
                <a href="#" class="block text-center w-full py-2 text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Process To Checkout
                </a>
            </div>
        </div>
        <!-- sidebar end -->
    </div>
    <!-- cart wrapper end -->
</template>

<script>
    export default {
        name: 'CartWrapper'
    }
</script>