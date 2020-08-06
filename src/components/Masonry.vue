<template>
  <div class="masonry" v-if="images">
    <div :key="key" v-for="(img, key) in images" class="masonry-brick">
        <ImageDialog
            :className="'masonry-img'"
            :filename="img.name"
            :gallery="img.gallery"
            :thumb="img.thumb"
            :index="key"
        />
    </div>
  </div>
</template>

<script>
  import ImageDialog from "./ImageDialog"
  export default {
    name: "Masonry",
    props: {
      images: {
        type: Array,
        default: null
      }
    },
    components: {
      ImageDialog
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
