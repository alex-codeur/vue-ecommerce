<template>
    <div>
        <BreadcrumsWish/>
        <AccountWrapper/>
    </div>
</template>

<script>
    import BreadcrumsWish from '../../components/BreadcrumsWish.vue'
    import AccountWrapper from '../../components/AccountWrapper.vue'

    export default {
        name: 'Wishlist',
        components: {
            BreadcrumsWish,
            AccountWrapper
        }
    }
</script>