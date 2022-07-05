<template>
    <div>
        <BreadcrumsComplete/>
        <OrderCompleteComponent/>
    </div>
</template>

<script>
    import BreadcrumsComplete from '../../components/BreadcrumsComplete.vue'
    import OrderCompleteComponent from '../../components/OrderCompleteComponent.vue'

    export default {
        name: 'OrderComplete',
        components: {
            BreadcrumsComplete,
            OrderCompleteComponent
        }
    }
</script>