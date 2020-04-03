<template>
  <Gallery :title="'Tokyo'" :subtitle="'Japan'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'Tokyo',
    components: {
      Gallery
    }
  }
</script>
