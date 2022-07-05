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

        <!-- Profile info -->
        <div class="col-span-9 grid grid-cols-3 gap-4">
            <!-- single card -->
            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Personal profile</h3>
                    <a href="#" class="text-primary">Edit</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">Alex Esaki</h4>
                    <p class="text-gray-800">apachecordovax@gmail.com</p>
                    <p class="text-gray-800">654 188 685</p>
                </div>
            </div>
            <!-- single card end -->
            <!-- single card -->
            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Personal profile</h3>
                    <a href="#" class="text-primary">Edit</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">Alex Esaki</h4>
                    <p class="text-gray-800">apachecordovax@gmail.com</p>
                    <p class="text-gray-800">654 188 685</p>
                </div>
            </div>
            <!-- single card end -->
            <!-- single card -->
            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Personal profile</h3>
                    <a href="#" class="text-primary">Edit</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">Alex Esaki</h4>
                    <p class="text-gray-800">apachecordovax@gmail.com</p>
                    <p class="text-gray-800">654 188 685</p>
                </div>
            </div>
            <!-- single card end -->
        </div>
        <!-- Profile info end -->
    </div>
    <!-- Account wrapper end -->
</template>

<script>
    export default {
        name: 'AccountProfile'
    }
</script>