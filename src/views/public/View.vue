<template>
    <div>
        <BreadcrumsView/>
        <ProductView/>
        <ProductDetail/>
        <ProductWrapperView/>
    </div>
</template>

<script>
    import BreadcrumsView from '../../components/BreadcrumsView.vue'
    import ProductView from '../../components/ProductView.vue'
    import ProductDetail from '../../components/ProductDetail.vue'
    import ProductWrapperView from '../../components/ProductWrapperView.vue'

    export default {
        name: 'View',
        components: {
            BreadcrumsView,
            ProductView,
            ProductDetail,
            ProductWrapperView
        }
    }
</script>