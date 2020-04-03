<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-left">
        <h3 style="color: #bbb; margin-top: 0;">{{ subtitle }}</h3>
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <Grid :title="title"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';
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
