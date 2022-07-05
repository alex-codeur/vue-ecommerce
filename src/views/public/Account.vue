<template>
    <div>
        <BreadcrumsAccount/>
        <AccountProfile/>
    </div>
</template>

<script>
    import BreadcrumsAccount from '../../components/BreadcrumsAccount.vue'
    import AccountProfile from '../../components/AccountProfile.vue'

    export default {
        name: 'Account',
        components: {
            BreadcrumsAccount,
            AccountProfile
        }
    }
</script>