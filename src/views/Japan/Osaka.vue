<template>
  <Gallery :title="'Japan'" :subtitle="'Osaka'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'Osaka',
    components: {
      Gallery
    }
  }
</script>
