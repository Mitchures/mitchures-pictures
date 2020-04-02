<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 col-md-6 no-padding-x">
        <h5>Travel Abroad</h5>
        <h1>Japan</h1>
        <h3 style="color: #bbb; margin: 0;">March - April 2019</h3>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="'Japan'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';
  export default {
    name: 'Japan',
    components: {
      Grid
    }
  }
</script>
