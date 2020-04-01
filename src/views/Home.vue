<template>
  <div class="container-fluid">
    <!-- <div class="grid">
      <div class="col-xs-12">
        <h1>Abroad</h1>
      </div>
    </div> -->
    <div class="grid">
      <div class="col-xs-12 no-padding">
        <Card :title="'Iceland'" :cover="'Skogafoss-Iceland'"/>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 col-md-4 no-padding">
        <Card :title="'Canada'" :cover="'tobias'"/>
      </div>
      <div class="col-xs-12 col-md-8 no-padding">
        <Card :title="'Japan'" :cover="'kyoto'"/>
      </div>
    </div>
    <!-- <div class="grid">
      <div class="col-xs-12">
        <h1>Domestic</h1>
      </div>
    </div> -->
    <div class="grid">
      <div class="col-xs-12 col-md-8 no-padding">
        <Card :title="'Nashville'" :cover="'DSC04599'"/>
      </div>
      <div class="col-xs-12 col-md-4 no-padding">
        <Card :title="'New Orleans'" :cover="'DSC05024'"/>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 no-padding">
        <Card :title="'Asheville'" :cover="'DSC06867'"/>
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
