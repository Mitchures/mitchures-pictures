<template>
  <Gallery :title="'New Orleans'" :subtitle="'United States'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'NewOrleans',
    components: {
      Gallery
    }
  }
</script>
