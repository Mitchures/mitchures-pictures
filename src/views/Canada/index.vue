<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h1>Canada</h1>
        <h3 class="subtitle">August 2017</h3>
        <h4 class="description">All photographs were shot on my <em>Sony A7II</em> with 18mm, 35mm, 55mm, and 135mm <em>Sony Zeiss</em> lenses.</h4>
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
