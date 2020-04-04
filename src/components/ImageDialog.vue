<template>
  <div class="image-dialog" :class="className">
    <button class="image-dialog-trigger" type="button" @click="showDialog">
      <img class="image-dialog-thumb" ref="thumb" :src="thumb"/>
    </button>
    <transition name="dialog" @enter="enter" @leave="leave">
      <div class="image-dialog-background" v-show="appearedDialog" ref="dialog">
        <button class="image-dialog-close" type="button" @click="hideDialog" aria-label="Close"></button>
        <img class="image-dialog-animate" ref="animate" :class="{ loading: !loaded }" :src="loaded ? full : thumb"/>
        <img class="image-dialog-full" ref="full" :src="appearedDialog && full" :width="fullWidth" :height="fullHeight" @load="onLoadFull"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import EXIF from "../../node_modules/exif-js/exif"
  export default {
    name: "ImageDialog",
    props: {
      thumb: {
        type: String,
        default: null
      },
      full: {
        type: String,
        default: null
      },
      fullWidth: {
        type: Number,
        default: null
      },
      fullHeight: {
        type: Number,
        default: null
      },
      className: {
        type: String,
        default: ""
      }
    },
    data () {
      return {
        loaded: false,
        appearedDialog: false
      }
    },
    methods: {
      showDialog () {
        this.appearedDialog = true
      },
      hideDialog () {
        this.appearedDialog = false
      },
      enter () {
        this.animateImage(
          this.$refs.thumb,
          this.$refs.full
        )
      },
      leave () {
        this.animateImage(
          this.$refs.full,
          this.$refs.thumb
        )
      },
      onLoadFull () {
        this.loaded = true
        this.getMetaData(this.$refs.full)
      },
      animateImage (startEl, destEl) {
        const start = this.getBoundForDialog(startEl)
        this.setStart(start)

        this.$nextTick(() => {
          const dest = this.getBoundForDialog(destEl)
          this.setDestination(start, {
            top: dest.top,
            left: dest.left,
            width: dest.width || this.fullWidth,
            height: dest.height || this.fullHeight
          })
        })
      },
      getBoundForDialog (el) {
        const bound = el.getBoundingClientRect()
        const dialog = this.$refs.dialog
        return {
          top: bound.top + dialog.scrollTop,
          left: bound.left + dialog.scrollLeft,
          width: bound.width,
          height: bound.height
        }
      },
      setStart (start) {
        const el = this.$refs.animate
        el.style.left = start.left + 'px'
        el.style.top = start.top + 'px'
        el.style.width = start.width + 'px'
        el.style.height = start.height + 'px'
        el.style.transitionDuration = '0s'
        el.style.transform = ''
      },
      setDestination (start, dest) {
        const el = this.$refs.animate
        el.style.transitionDuration = ''

        const translate = `translate(${dest.left - start.left}px, ${dest.top - start.top}px)`
        const scale = `scale(${dest.width / start.width}, ${dest.height / start.height})`
        el.style.transform = `${translate} ${scale}`
      },
      getMetaData (image) {
        EXIF.getData(image, function () {
          const allMetaData = EXIF.getAllTags(this)
          console.log(allMetaData)
          // console.log(allMetaData.thumbnail.blob)
          // const objectURL = URL.createObjectURL(allMetaData.thumbnail.blob)
          // const img = new Image()
          // img.src = objectURL
          // console.log(objectURL)
          // console.log(img)
          return allMetaData
        })
      }
    }
  }
</script>

<style lang="scss">
  .image-dialog {
    &-trigger {
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      -webkit-transition: all .3s ease;
      transition: all .3s ease;

      img {
        pointer-events: none
      }

      &:focus {
        outline: 0;
      }

      &:hover {
        opacity: .75;
      }
    }

    &-close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 60px;
      height: 60px;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      transition: 300ms ease-out;
      outline: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -0.5px;
        margin-left: -20px;
        width: 40px;
        height: 1px;
        background-color: #000;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(135deg);
      }

      &:hover {
        transform: rotate(270deg);
      }
    }

    &-background {
      overflow: auto;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      padding: 80px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
    }

    &-animate {
      display: none;
      position: absolute;
      transform-origin: left top;

      &.loading {
        display: block;
      }
    }
  }

  .dialog {
    &-enter-active,
    &-leave-active {
      transition: background-color 300ms ease-out;
    }

    &-enter,
    &-leave-to {
      background-color: rgba(255, 255, 255, 0);
    }

    &-enter-active .image-dialog-animate,
    &-leave-active .image-dialog-animate {
      display: block;
      transition: transform 300ms cubic-bezier(1, 0, .7 , 1);
    }

    &-enter-active .image-dialog-full,
    &-leave-active .image-dialog-full {
      visibility: hidden;
    }
  }

  @media (prefers-color-scheme: dark) {
    .image-dialog {
      &-background {
        background-color: rgba(0, 0, 0, 1);
      }

      &-close {
        &::before,
        &::after {
          background-color: #fff;
        }
      }
    }
  }
</style>
