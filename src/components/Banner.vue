<template>
    <!-- banner -->
    <div class="bg-cover bg-no-repeat bg-center py-36 image">
        <div class="container">
            <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
                best collection for <br> home decoration
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis <br>
                illo quae fugit explicabo veritatis illum
            </p>
            <div class="mt-12">
                <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop Now</a>
            </div>
        </div>
    </div>
    <!-- banner end -->
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style scoped>
    .image {
        background-image: url('../assets/images/banner.png')
    }
</style>