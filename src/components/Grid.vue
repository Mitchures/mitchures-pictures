<template>
    <div class="container">
        <div class="grid">
            <div :key="key" v-for="(img, key) in images" class="col-xs-12 col-md-6">
                <img :src="img"  alt=""/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "Grid",
      data () {
        return {
          images: {}
        }
      },
      mounted () {
        this.importAll(require.context("../assets/images/photography/", true, /\.jpg$/));
      },
      methods: {
        importAll(r) {
          let imgs = {};
          r.keys().forEach(key => (imgs[key] = r(key)));
          this.images = imgs;
        }
      }
    }
</script>