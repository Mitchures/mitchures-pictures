<template>
  <div id="app">
    <Nav/>
    <div class="content animated fadeIn delay-hs">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  import Footer from "./components/Footer";

  export default {
    components: { Nav, Footer }
  }
</script>
