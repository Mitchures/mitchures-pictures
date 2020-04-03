<template>
  <div class="container">
    <div class="grid">
      <div class="col-xs-12 col-md-6 no-padding-x">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <Section :title="'Asheville'" :subtitle="'August 2017'"/>
    <Section :title="'Nashville'" />
    <Section :title="'New Orleans'" />
  </div>
</template>

<script>
  import Section from '@/components/Section';
  export default {
    name: 'UnitedStates',
    components: {
      Section
    },
    data () {
      return {
        title: "United States"
      }
    }
  }
</script>
