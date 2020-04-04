<template>
  <Gallery :title="'Japan'" :subtitle="'Kyoto'"/>
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
