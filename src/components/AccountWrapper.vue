<template>
    <!-- Account wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <!-- sidebar -->
        <div class="col-span-3">
            <!-- account profile -->
            <div class="py-4 px-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="../assets/images/alex3.png" alt="avatar" class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">
                        Alex Esaki
                    </h4>
                </div>
            </div>
            <!-- account profile end -->

            <!-- profile links -->
            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <!-- single link -->
                    <div class="space-y-1 pl-8">
                        <a href="#" class="relative text-primary block font-medium capitalize transition">
                            <span class="absolute -left-8 top-0 text-base">
                                <i class="far fa-address-card"></i>
                            </span>
                            Manage account
                        </a>
                        <a href="#" class="relative hover:text-primary block  capitalize transition">
                            My order history
                        </a>
                        <a href="#" class="relative hover:text-primary block  capitalize transition">
                            Manage address
                        </a>
                        <a href="#" class="relative hover:text-primary block  capitalize transition">
                            Change password
                        </a>
                    </div>
                <!-- single link end -->

                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                        My Order History
                    </a>
                    <a href="#" class="relative hover:text-primary block  capitalize transition">
                        My returns
                    </a>
                    <a href="#" class="relative hover:text-primary block  capitalize transition">
                        My Cancellations
                    </a>
                    <a href="#" class="relative hover:text-primary block  capitalize transition">
                        My Reviews
                    </a>
                </div>
                <!-- single link end -->

                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                        Payment Methods
                    </a>
                    <a href="#" class="relative hover:text-primary block  capitalize transition">
                        Voucher
                    </a>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-heart"></i>
                        </span>
                        My wishlist
                    </a>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                        Logout
                    </a>
                </div>
                <!-- single link end -->
            </div>
            <!-- profile links end -->
        </div>
        <!-- sidebar end -->

        <!-- wish list -->
        <div class="col-span-9 space-y-4">
            <!-- Single wishlist -->
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <!-- wishlist image -->
                <div class="w-28 flex-shrink-0">
                    <img src="../assets/images/products/chair.jpg" alt="product" class="w-full">
                </div>
                <!-- wishlist image end -->

                <!-- wishlist content -->
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-xl font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <p class="text-gray-500 text-sm">
                        Availability: <span class="text-green-600">In Stock</span>
                    </p>
                </div>
                <!-- wishlist content end -->

                <div class="text-primary text-lg font-semibold">$320.00</div>
                <a href="#"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i class="fas fa-shopping-bag"></i> Add to cart
                </a>
                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Single wishlist end -->
            <!-- Single wishlist -->
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <!-- wishlist image -->
                <div class="w-28 flex-shrink-0">
                    <img src="../assets/images/products/chair2.jpg" alt="product" class="w-full">
                </div>
                <!-- wishlist image end -->

                <!-- wishlist content -->
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-xl font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <p class="text-gray-500 text-sm">
                        Availability: <span class="text-red-600">Out of Stock</span>
                    </p>
                </div>
                <!-- wishlist content end -->

                <div class="text-primary text-lg font-semibold">$320.00</div>
                <a href="#"
                    class="cursor-not-allowed border border-red-300 text-white bg-red-300 px-8 py-2 font-medium rounded transition">
                    <i class="fas fa-shopping-bag"></i> Add to cart
                </a>
                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Single wishlist end -->
        </div>
        <!-- wish list end -->
    </div>
    <!-- Account wrapper end -->
</template>

<script>
    export default {
        name: 'AccountWrapper'
    }
</script>