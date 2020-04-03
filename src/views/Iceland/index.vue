<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h5>Travel Abroad</h5>
        <h1>Iceland</h1>
        <h3 style="color: #bbb; margin: 0;">April 2017, January 2018</h3>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="'Iceland'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '@/components/Grid';
  export default {
    name: 'Iceland',
    components: {
      Grid
    }
  }
</script>
