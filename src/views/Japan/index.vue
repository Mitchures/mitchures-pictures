<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 col-md-6 no-padding-x">
        <h1>{{ title }}</h1>
        <h3 style="color: #bbb; margin: 0;">April 2019</h3>
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
