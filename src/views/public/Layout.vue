<template>
    <div>
        <Header/>
        <Navbar/>
        <router-view/>
        <Footer/>
        <Copyright/>
    </div>
</template>

<script>
    import Header from "../../components/Header.vue";
    import Navbar from "../../components/Navbar.vue";
    import Footer from "../../components/Footer.vue";
    import Copyright from "../../components/Copyright.vue";

    export default {
        name: 'PublicLayout',
        components: {
            Header,
            Navbar,
            Footer,
            Copyright
        }
    }
</script>