<template>
    <div>
        <HeaderAuth/>
        <router-view/>
        <Footer/>
        <Copyright/>
    </div>
</template>

<script>
    import HeaderAuth from "../../components/HeaderAuth.vue";
    import Footer from "../../components/Footer.vue";
    import Copyright from "../../components/Copyright.vue";

    export default {
        name: 'AuthLayout',
        components: {
            HeaderAuth,
            Footer,
            Copyright
        }
    }
</script>