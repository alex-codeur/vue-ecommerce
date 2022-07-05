<template>
    <!-- category -->
    <div class="container py-16">
        <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>

        <div class="grid grid-cols-3 gap-3">
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/bedroom.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Bedroom
                </a>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/sofa.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Sofa
                </a>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/office2.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Office
                </a>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/outdoor.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Outdoor
                </a>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/mattress.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Mattress
                </a>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/categories/dinning.jpg" alt="bedroom" class="w-full h-full">
                <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    Dinings
                </a>
            </div>
            <!-- single category end -->
        </div>
    </div>
    <!-- category end -->
</template>

<script>
    export default {
        name: 'Category'
    }
</script>