<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-left">
        <h3 style="color: #bbb; margin-top: 0;">{{ title }}</h3>
        <h1>{{ subtitle }}</h1>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="title" :subtitle="subtitle"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from './Grid';
  export default {
    name: 'Gallery',
    props: {
      title: {
        type: String,
        default: null
      },
      subtitle: {
        type: String,
        default: null
      }
    },
    components: {
      Grid
    }
  }
</script>
