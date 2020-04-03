<template>
  <Gallery :title="'Kyoto'" :subtitle="'Japan'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'Kyoto',
    components: {
      Gallery
    }
  }
</script>
