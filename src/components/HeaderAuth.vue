<template>
    <!-- header -->
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <a href="#">
                <img src="../assets/images/logo-md.svg" alt="logo">
            </a>

            <!-- icons -->
            <div class="flex items-center space-x-4">
                <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="text-xs leading-3">Login/Register</div>
                </a>
            </div>
        </div>
    </header>
    <!-- header end -->
</template>

<script>
    export default {
        name: 'HeaderAuth'
    }
</script>