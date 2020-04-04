<template>
  <Gallery :title="'United States'" :subtitle="'New Orleans'"/>
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
