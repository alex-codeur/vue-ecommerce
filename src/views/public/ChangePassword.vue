<template>
    <div>
        <BreadcrumsPassword/>
        <ChangePasswordComponent/>
    </div>
</template>

<script>
    import BreadcrumsPassword from '../../components/BreadcrumsPassword.vue'
    import ChangePasswordComponent from '../../components/ChangePasswordComponent.vue'

    export default {
        name: 'ChangePassword',
        components: {
            BreadcrumsPassword,
            ChangePasswordComponent
        }
    }
</script>