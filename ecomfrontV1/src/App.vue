<script>

  import NaveBar from './components/Bar/NaveBar.vue';
  import Footer from './components/Bar/Footer.vue';
  

export default {
  components: {
    NaveBar,
    Footer
  }
}
</script>

<template>
  <div>
    <NaveBar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>

</style>
