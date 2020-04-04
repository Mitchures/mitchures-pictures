<template>
  <Gallery :title="'United States'" :subtitle="'Asheville'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'Asheville',
    components: {
      Gallery
    }
  }
</script>
