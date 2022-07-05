<template>
    <div>
        <BreadcrumsCheckout/>
        <CheckoutWrapper/>
    </div>
</template>

<script>
    import BreadcrumsCheckout from '../../components/BreadcrumsCheckout.vue'
    import CheckoutWrapper from '../../components/CheckoutWrapper.vue'

    export default {
        name: 'Checkout',
        components: {
            BreadcrumsCheckout,
            CheckoutWrapper
        }
    }
</script>