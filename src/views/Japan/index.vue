<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 no-padding-x">
        <h1>{{ title }}</h1>
        <h3 class="subtitle">April 2019</h3>
        <h4 class="description">All photographs were shot on my <em>Leica M6</em> with various <em>Fujifilm</em> and <em>Kodak</em> film stocks along with 28mm and 90mm <em>Leica</em> lenses.</h4>
      </div>
    </div>
    <Section :title="'Tokyo'" :subtitle="'Day 2 - 4 & 7 - 9'"/>
    <Section :title="'Kyoto'" :subtitle="'Day 4 - 7'"/>
    <Section :title="'Nara'" :subtitle="'Day 6'"/>
    <Section :title="'Osaka'" :subtitle="'Night 6'"/>
  </div>
</template>

<script>
  import Section from '@/components/Section';
  export default {
    name: 'Japan',
    components: {
      Section
    },
    data () {
      return {
        title: "Japan"
      }
    }
  }
</script>
