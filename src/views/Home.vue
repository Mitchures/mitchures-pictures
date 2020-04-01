<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12">
        <Card :title="'Iceland'" :cover="'Skogafoss-Iceland'"/>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 col-md-4">
        <Card :title="'Canada'" :cover="'Group-1'"/>
      </div>
      <div class="col-xs-12 col-md-8">
        <Card :title="'Japan'" :cover="'dotonbori'"/>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12">
        <Card :title="'Asheville'" :cover="'DSC06867'"/>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 col-md-8">
        <Card :title="'Nashville'" :cover="'DSC04599'"/>
      </div>
      <div class="col-xs-12 col-md-4">
        <Card :title="'New Orleans'" :cover="'DSC05024'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card';
  export default {
    name: 'Home',
    components: {
      Card
    }
  }
</script>
