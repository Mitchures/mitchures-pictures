<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 col-md-6 no-padding-x">
        <h5>Travel Domestic</h5>
        <h1>New Orleans</h1>
      </div>
      <div class="col-xs-12 col-md-6 no-padding-x">
        <br/>
        <h3 style="color: #bbb; text-align: right;"></h3>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="'New Orleans'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';
  export default {
    name: 'New Orleans',
    components: {
      Grid
    }
  }
</script>
