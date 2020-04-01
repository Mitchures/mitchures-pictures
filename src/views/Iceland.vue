<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12">
        <Grid :title="'Iceland'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';
  export default {
    name: 'Iceland',
    components: {
      Grid
    }
  }
</script>
