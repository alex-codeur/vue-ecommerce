<template>
    <div>
        <BreadcrumsCart/>
        <CartWrapper/>
    </div>
</template>

<script>
    import BreadcrumsCart from '../../components/BreadcrumsCart.vue'
    import CartWrapper from '../../components/CartWrapper.vue'

    export default {
        name: 'Cart',
        components: {
            BreadcrumsCart,
            CartWrapper
        }
    }
</script>