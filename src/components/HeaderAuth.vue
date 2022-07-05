<template>
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <a href="#">
                <img src="../assets/images/logo-md.svg" alt="logo">
            </a>

            <!-- icons -->
            <div class="flex items-center justify-between space-x-4">
                <div class="text-xs leading-3">Login/Register</div>

                <!-- Profile dropdown -->
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
    </header>
    <!-- header end -->
</template>

<script>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

    export default {
        name: 'HeaderAuth',
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