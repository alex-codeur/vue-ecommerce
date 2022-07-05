<template>
    <div>
        <BreadcrumsProfile/>
        <ProfileInfo/>
    </div>
</template>

<script>
    import BreadcrumsProfile from '../../components/BreadcrumsProfile.vue'
    import ProfileInfo from '../../components/ProfileInfo.vue'

    export default {
        name: 'Profile',
        components: {
            BreadcrumsProfile,
            ProfileInfo
        }
    }
</script>