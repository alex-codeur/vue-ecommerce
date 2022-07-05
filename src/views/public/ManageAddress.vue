<template>
    <div>
        <BreadcrumsAddress/>
        <AccountAddress/>
    </div>
</template>

<script>
    import BreadcrumsAddress from '../../components/BreadcrumsAddress.vue'
    import AccountAddress from '../../components/AccountAddress.vue'

    export default {
        name: 'ManageAddress',
        components: {
            BreadcrumsAddress,
            AccountAddress
        }
    }
</script>