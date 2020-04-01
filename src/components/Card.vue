<template>
  <a :href="'/' + title.toLowerCase()">
    <div class="card" :style="{ backgroundImage: `url('${require('../assets/images/photography/digital/' + title + '/' + cover + '.jpg')}')`}">
      <div class="card-content">
        <div class="card-header">
          <div class='card-count'>{{ imageCount }}</div>
          <div class='card-title'>{{ title }}</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'cover'],
    computed: {
      imageCount () {
        const r = require.context("../assets/images/photography/digital/", true, /\.jpg$/);
        let imgs = [];
        r.keys().forEach(key => {
          if (key.includes(this.title)) {
            imgs.push(r(key));
          }
        });
        const count = imgs.length;
        if (count < 10)
          return '0' + count;
        else
          return count;
      }
    }
  }
</script>

<style lang="scss">
  .card {
    background-position: center;
    background-size: cover;
    height: 350px;
    width: 100%;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    .card-content {
      height: 100%;
      width: 75px;
      // background-color: rgba(240, 240, 240, .5);
      backdrop-filter: blur(25px) saturate(120%);
      .card-header {
        z-index: 1;
        position: relative;
        padding: 25px;
        .card-count {
          color: #fff;
          font-weight: 300;
          font-size: 2rem;
          position: absolute;
          top: 285px;
          left: 20px;
          transition: all .3s ease;
          // text-shadow: 0 2px 5px rgba(33,33,33,0.25);
        }
        .card-title {
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.125rem;
          writing-mode: vertical-rl;
          transition: all .3s ease;
          // text-shadow: 0 2px 5px rgba(33,33,33,0.25);
        }
      }
    }
    &:hover {
      // opacity: .75;
      // transform: scale(.98) translateZ(0px);
    }
  }
</style>
