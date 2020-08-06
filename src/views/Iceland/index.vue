<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h1>Iceland</h1>
        <h3 class="subtitle">April 2017, January 2018</h3>
        <h4 class="description">All photographs were shot on my <em>Sony A7II</em> with 25mm, 35mm, 55mm, and 85mm <em>Sony Zeiss</em> lenses.</h4>
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
