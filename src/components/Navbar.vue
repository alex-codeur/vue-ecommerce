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

                <!-- Profile dropdown -->
                <div class="flex items-center justify-between">
                    <router-link to="/auth" class="text-gray-200 hover:text-white transition">Login/Register</router-link>
                    <Menu as="div" class="ml-3 relative">
                        <div>
                        <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                        </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem>
                            <a @click="logout" :class="['block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign out</a>
                            </MenuItem>
                        </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>
    </nav>
    <!-- navbar end -->
</template>

<script>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

    export default {
        name: 'Navbar',
        components: {
            Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,
            BellIcon, MenuIcon, XIcon
        },
        data() {
            return {
                 user: {
                    name: 'Tom Cook',
                    email: 'tom@example.com',
                    imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            }
        }
    }
</script>