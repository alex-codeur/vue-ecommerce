<template>
    <!-- checkout wrapper -->
    <div class="container gap-6 grid grid-cols-12 items-start pb-16 pt-4">
        <!-- checkout form -->
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">checkout</h3>
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="firstname">Fisrt Name <span class="text-primary">*</span></label>
                        <input type="text" name="firstname" id="firstname" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <div>
                        <label for="lastname">Last Name <span class="text-primary">*</span></label>
                        <input type="text" name="lastname" id="lastname" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                </div>
                <div>
                    <label for="company" class="text-gray-600 mb-2 block">
                        Company name
                    </label>
                    <input type="text" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="Region" class="text-gray-600 mb-2 block">
                        Country/Region <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="Region" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="StreetAddress" class="text-gray-600 mb-2 block">
                        Street Address <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="StreetAddress" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="City" class="text-gray-600 mb-2 block">
                        Town/City <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="City" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="ZipCode" class="text-gray-600 mb-2 block">
                        Zip Code <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="ZipCode" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="PhoneNumber" class="text-gray-600 mb-2 block">
                        Phone Number <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="PhoneNumber" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
                <div>
                    <label for="EmailAddress" class="text-gray-600 mb-2 block">
                        Email Address <span class="text-primary">*</span>
                    </label>
                    <input type="text" id="EmailAddress" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                </div>
            </div>
        </div>
        <!-- checkout form end -->
        
        <!-- sidebar -->
        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-600 text-lg mb-4 font-medium uppercase">Order Summary</h4>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Italien Shape Sofa</h5>
                        <p class="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">$320</p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Italien Shape Sofa</h5>
                        <p class="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">$320</p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Italien Shape Sofa</h5>
                        <p class="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">$320</p>
                </div>
                <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                    <p>Subtotal</p>
                    <p>$320</p>
                </div>
                <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between text-gray-800 font-medium py-3 uppercase">
                    <p class="font-semibold">Total</p>
                    <p>$320</p>
                </div>
                <div class="flex items-center mb-4 mt-2">
                    <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">Agree to our <a href="#" class="text-primary">terms & conditions</a></label>
                </div>
                <a href="#" class="block text-center w-full py-2 text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Place holder
                </a>
            </div>
        </div>
        <!-- sidebar end -->
    </div>
    <!-- checkout wrapper end -->
</template>

<script>
    export default {
        name: 'CheckoutWrapper'
    }
</script>