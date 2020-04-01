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
      props: ['title'],
      data () {
        return {
          images: null
        }
      },
      mounted () {
        this.importAll(require.context("../assets/images/photography/", true, /\.jpg$/));
      },
      methods: {
        importAll(r) {
          let imgs = [];
          r.keys().forEach(key => {
            if (key.includes(this.title)) {
              imgs.push(r(key));
            }
          });
          this.images = imgs;
        }
      }
    }
</script>
