<template>
  <div class="masonry">
    <div :key="key" v-for="(img, key) in images" class="masonry-brick">
        <ImageDialog :className="'masonry-img'" :full="img.full" :thumb="img.thumb" />
    </div>
  </div>
</template>

<script>
  import ImageDialog from "./ImageDialog"
  export default {
    name: "Grid",
    props: {
      title: {
        type: String,
        default: null
      }
    },
    components: {
      ImageDialog
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
        let imgs = []
        r.keys().map(key => {
          if (key.includes(this.title) && !key.includes("thumb") && !key.includes("cover")) {
            const img = {}
            img.full = r(key)
            const thumbKey = key.replace("full", "thumb").substr(1, key.indexOf(".", key.indexOf(".") + 2)) + "-thumb.jpg"
            img.thumb = r('.' + thumbKey)
            imgs.push(img)
          }
        })
        this.images = imgs
      }
    }
  }
</script>

<style lang="scss">

  .masonry {
    column-count: 1;
    column-gap: 1rem;
    .masonry-brick {
      margin: 0 0 .7rem;
      .masonry-img {
        width: 100%;
      }
    }
  }

  @media (min-width: 48rem) {
    .masonry {
      column-count: 2;
    }
  }

  @media (min-width: 62rem) {
    .masonry {
      column-count: 3;
    }
  }

</style>
