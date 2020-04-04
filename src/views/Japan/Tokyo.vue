<template>
  <Gallery :title="'Japan'" :subtitle="'Tokyo'"/>
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
