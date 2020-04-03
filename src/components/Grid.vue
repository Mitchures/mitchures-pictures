<template>
  <div class="masonry">
    <div :key="key" v-for="(img, key) in images" class="masonry-brick">
        <img :src="img" class="masonry-img" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Grid",
    props: {
      title: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        images: null
      }
    },
    mounted () {
      this.importAll(require.context("../assets/images/photography/", true, /\.jpg$/));
      window.scrollTo(0, 0);
    },
    methods: {
      importAll(r) {
        let imgs = [];
        r.keys().map(key => {
          if (key.includes(this.title)) {
            imgs.push(r(key));
          }
        });
        this.images = imgs;
      }
    }
  }
</script>

<style lang="scss">
  .masonry {
    column-count: 2;
    column-gap: 1rem;
    .masonry-brick {
      margin: 0 0 .5rem;
      .masonry-img {
        width: 100%;
      }
    }
  }
</style>
