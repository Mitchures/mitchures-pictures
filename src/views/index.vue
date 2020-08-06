<template>
  <div class="container">
    <section>
      <div class="grid">
        <div class="col-xs-12 col-md-6 no-padding-left">
          <h5>Travel</h5>
          <h1>Abroad</h1>
          <h3 class="subtitle">Iceland, Canada, Japan</h3>
        </div>
      </div>
      <div class="grid">
        <div class="col-xs-12 no-padding">
          <Card :title="'Iceland'"/>
        </div>
      </div>
      <div class="grid">
        <div class="col-xs-12 col-md-6 no-padding">
          <Card :title="'Canada'"/>
        </div>
        <div class="col-xs-12 col-md-6 no-padding">
          <Card :title="'Japan'" :cover="'Japan-cover'"/>
        </div>
      </div>
    </section>
    <section>
      <div class="grid">
        <div class="col-xs-12 no-padding-left">
          <h5>Travel</h5>
          <h1>Domestic</h1>
          <h3 class="subtitle">Asheville, Nashville, New Orleans</h3>
        </div>
      </div>
      <div class="grid">
        <div class="col-xs-12 col-md-8 no-padding">
          <Card :title="'Nashville'" height="700px"/>
        </div>
        <div class="col-xs-12 col-md-4 no-padding">
          <div class="grid">
            <div class="col-xs-12 no-padding">
              <Card :title="'Asheville'" />
            </div>
            <div class="col-xs-12 no-padding">
              <Card :title="'New Orleans'" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Card from '@/components/Card';
  export default {
    name: 'Home',
    components: {
      Card
    }
  }
</script>
