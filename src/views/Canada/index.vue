<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h5>Travel Abroad</h5>
        <h1>Canada</h1>
        <h3 style="color: #bbb; margin: 0;">August 2017</h3>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="'Canada'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '@/components/Grid';
  export default {
    name: 'Canada',
    components: {
      Grid
    }
  }
</script>
