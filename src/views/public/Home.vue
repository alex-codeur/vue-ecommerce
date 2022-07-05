<template>
    <div>
        <Banner/>
        <Feature/>
        <Category/>
        <FirstProduct/>
        <Offer/>
        <SecondProduct/>
    </div>
</template>

<script>
    import Banner from '../../components/Banner.vue'
    import Feature from '../../components/Feature.vue'
    import Category from '../../components/Category.vue'
    import FirstProduct from '../../components/FirstProduct.vue'
    import Offer from '../../components/Offer.vue'
    import SecondProduct from '../../components/SecondProduct.vue'

    export default {
        name: 'Home',
        components: {
            Banner,
            Feature,
            Category,
            FirstProduct,
            Offer,
            SecondProduct,
        }
    }
</script>