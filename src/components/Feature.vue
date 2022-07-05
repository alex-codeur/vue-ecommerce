<template>
    <!-- feature section -->
    <div class="container py-16">
        <div class="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
            <!-- single feature -->
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/truck.png" alt="truck" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Free shopping</h4>
                    <p class="text-gray-500 text-sm">order over $200</p>
                </div>
            </div>
            <!-- single feature end -->
            <!-- single feature -->
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/money-back.png" alt="money-back" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">money returns</h4>
                    <p class="text-gray-500 text-sm">30 Days money return</p>
                </div>
            </div>
            <!-- single feature end -->
            <!-- single feature -->
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/24-hours.png" alt="24-hours" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                    <p class="text-gray-500 text-sm">Customer support</p>
                </div>
            </div>
            <!-- single feature end -->
        </div>
    </div>
    <!-- feature section end -->
</template>

<script>
    export default {
        name: 'Feature'
    }
</script>