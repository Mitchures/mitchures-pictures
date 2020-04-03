<template>
  <section>
    <div class="grid">
      <div class="col-xs-12 no-padding-left">
        <h2>{{ title }}</h2>
        <h4 style="color: #bbb; margin-top: 0;">{{ subtitle }}</h4>
      </div>
    </div>
    <div class="grid">
      <div class="col-xs-12 col-md-5 no-padding">
        <Card :title="title" height="700px"/>
      </div>
      <div class="col-xs-12 col-md-7 no-padding">
        <div class="grid">
          <div class="col-xs-12 no-padding">
            <Card :title="title" :cover="title + '-01'"/>
          </div>
          <div class="col-xs-12 no-padding">
            <Card :title="title" :cover="title + '-02'"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Card from '../components/Card';
  export default {
    name: 'Section',
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
      Card
    }
  }
</script>

<style lang="scss">
  section {
    padding: 0 0 5rem;
  }
</style>
