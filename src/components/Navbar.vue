<template>
    <!-- navbar -->
    <nav class="bg-gray-800">
        <div class="container flex">
            <!-- all category -->
            <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span class="text-white">
                    <i class="fas fa-bars"></i>
                </span>
                <span class="capitalize ml-2 text-white">All categories</span>

                <div class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/bed.png" alt="bed" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                    </a>
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/canape.png" alt="canape" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/work.png" alt="office" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Office</span>
                    </a>
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/terrace.png" alt="terrace" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </a>
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/mattress.png" alt="mattress" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                    </a>
                    <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-300 transition">
                        <img src="../assets/images/icons/dinning-table.png" alt="dinning" class="w-5 h-5 object-contain">
                        <span class="ml-6 text-gray-600 text-sm">Dinning</span>
                    </a>
                </div>
            </div>
            <!-- all category end -->

            <!-- navbar links -->
            <div class="flex items-center justify-between flex-grow pl-12">
                <div class="flex items-center space-x-6 capitalize">
                    <router-link to="/" class="text-gray-200 hover:text-white transition">Home</router-link>
                    <router-link to="/shop" class="text-gray-200 hover:text-white transition">Shop</router-link>
                    <router-link to="/about" class="text-gray-200 hover:text-white transition">About us</router-link>
                    <router-link to="/contact" class="text-gray-200 hover:text-white transition">Contact us</router-link>
                </div>
                <router-link to="/auth" class="text-gray-200 hover:text-white transition">Login/Register</router-link>
            </div>
        </div>
    </nav>
    <!-- navbar end -->
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>