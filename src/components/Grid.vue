<template>
  <div class="masonry">
    <div :key="key" v-for="(img, key) in images" class="masonry-brick">
        <ImageDialog :className="'masonry-img'" :full="img.full" :thumb="img.thumb" />
    </div>
  </div>
</template>

<script>
  import ImageDialog from "./ImageDialog"
  import {storage} from '../firebaseConfig'
  export default {
    name: "Grid",
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
      if (this.subtitle) {
        this.importAllFromFirebase(storage.ref(`photography/${this.title}/${this.subtitle}`))
      }
      else {
        this.importAllFromFirebase(storage.ref(`photography/${this.title}`))
      }
    },
    methods: {
      importAll(r) {
        let imgs = []
        r.keys().map(key => {
          if (this.subtitle) {
            if (key.includes(this.subtitle) && !key.includes("thumb") && !key.includes("cover")) {
              const img = {}
              img.full = r(key)
              img.thumb = r('.' + key.replace("full", "thumb").substr(1, key.indexOf(".", key.indexOf(".") + 2)) + "-thumb.jpg")
              imgs.push(img)
            }
          }
          else {
            if (key.includes(this.title) && !key.includes("thumb") && !key.includes("cover")) {
              const img = {}
              img.full = r(key)
              img.thumb = r('.' + key.replace("full", "thumb").substr(1, key.indexOf(".", key.indexOf(".") + 2)) + "-thumb.jpg")
              imgs.push(img)
            }
          }
        })
        this.images = imgs
      },
      importAllFromFirebase(ref) {
        let imgs = []
        ref.listAll().then((res) => {
          const img = {}
          res.prefixes.map((prefix) => {
            console.log(prefix.name)
            const key = prefix.name
            prefix.listAll().then((r) => {
              r.items.map((item, index) => {
                console.log(index)
                item.getDownloadURL().then((url) => {
                  console.log(url)
                  img[key] = url
                  console.log(img)
                }).catch(er => console.log(er))
              })
            }).catch(err => console.log(err))
          })
          imgs.push(img)
          console.log(imgs)
        }).catch(error => console.log(error))
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
