<template>
  <Masonry v-if="loaded" :images="images" />
</template>

<script>
  import Masonry from './Masonry'
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
      Masonry
    },
    data () {
      return {
        images: [],
        loaded: false
      }
    },
    mounted () {
      window.scrollTo(0, 0);
      this.importAllFromFirebase(
        this.images,
        this.subtitle ? `${this.title}/${this.subtitle}` : this.title
      );
    },
    methods: {
      importAllFromFirebase (images, gallery) {
        storage
          .ref(`photography/${gallery}/thumb`)
          .listAll()
          .then(results => {
            results.items.map((item) => {
              item
                .getDownloadURL()
                .then((url) => {
                  images.push({
                    name: item.name.replace('-thumb', ''),
                    gallery: gallery,
                    thumb: url
                  });
                })
                .catch(error => console.log(error.message))
            })
          })
          .then(() => images.sort((a, b) => (a.name > b.name) ? 1 : -1))
          .then(() => this.loaded = true)
          .catch(error => console.log(error.message))
      }
    }
  }
</script>
