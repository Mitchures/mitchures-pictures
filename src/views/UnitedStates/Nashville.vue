<template>
  <Gallery :title="'United States'" :subtitle="'Nashville'"/>
</template>

<script>
  import Gallery from '@/components/Gallery';
  export default {
    name: 'Nashville',
    components: {
      Gallery
    }
  }
</script>
