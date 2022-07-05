<template>
    <div>
        <Breadcrums/>
        <ShopWrapper/>
    </div>
</template>

<script>
    import Breadcrums from '../../components/Breadcrums.vue'
    import ShopWrapper from '../../components/ShopWrapper.vue'

    export default {
        name: 'Shop',
        components: {
            Breadcrums,
            ShopWrapper
        }
    }
</script>