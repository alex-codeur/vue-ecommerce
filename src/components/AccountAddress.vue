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
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7">
            <h4 class="text-lg font-medium capitalize mb-4">
                Manage Address
            </h4>
            <div class="space-y-4">
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="fullname" class="text-gray-600 mb-2 block">Full name</label>
                        <input type="text" id="fullname" placeholder="Enter Your Full Name" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="phone" class="text-gray-600 mb-2 block">Phone Number</label>
                        <input type="text" id="phone" placeholder="Enter Your Phone Number" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end -->
                </div>
                <!-- form row end -->
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="Option" class="text-gray-600 mb-2 block">Country</label>
                        <select class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                            <option>Cameroun</option>
                            <option>Senegal</option>
                        </select>
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="Option" class="text-gray-600 mb-2 block">Region</label>
                        <select class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                            <option>Littoral</option>
                            <option>Centre</option>
                        </select>
                    </div>
                    <!-- single input end --> 
                </div>
                <!-- form row end -->
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="Option" class="text-gray-600 mb-2 block">City</label>
                        <select class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                            <option>Douala</option>
                            <option>Yaounde</option>
                        </select>
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="Option" class="text-gray-600 mb-2 block">Area</label>
                        <select class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                            <option>Akwa Nord</option>
                            <option>Deido</option>
                        </select>
                    </div>
                    <!-- single input end --> 
                </div>
                <!-- form row end -->
                <!-- form row -->
                <div>
                    <!-- single input -->
                        <label for="address" class="text-gray-600 mb-2 block">Address</label>
                        <input type="text" id="address" placeholder="Enter Your Address" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    <!-- single input end --> 
                </div>
                <!-- form row end -->

                <div class="mt-4">
                    <button type="submit" class="block w-full py-2 text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
        <!-- Profile info end -->
    </div>
    <!-- Account wrapper end -->
</template>

<script>
    export default {
        name: 'AccountAddress'
    }
</script>