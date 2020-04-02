<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h5>Travel Domestic</h5>
        <h1>Asheville</h1>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="'Asheville'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';
  export default {
    name: 'Asheville',
    components: {
      Grid
    }
  }
</script>
