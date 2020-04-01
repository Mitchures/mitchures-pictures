<template>
  <div class="card" :style="{ backgroundImage: `url('${require('../assets/images/photography/digital/' + title + '/' + cover + '.jpg')}')`}">
    <div class="card-content">
      <div class="card-header">
        <div class='card-count'>{{ imageCount }}</div>
        <div class='card-title'>{{ title }}</div>
      </div>
    </div>
  </div>
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
      // backdrop-filter: blur(25px) saturate(120%);
      // background: rgba(200, 200, 200, .5);
      .card-header {
        z-index: 1;
        position: relative;
        padding: 25px;
        .card-count {
          color: #fff;
          font-weight: bold;
          font-size: 2rem;
          position: absolute;
          top: 285px;
          left: 25px;
          transition: all .3s ease;
          text-shadow: 0 2px 5px rgba(33,33,33,0.25);
        }
        .card-title {
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.125rem;
          writing-mode: vertical-rl;
          transition: all .3s ease;
          text-shadow: 0 2px 5px rgba(33,33,33,0.25);
        }
      }
    }
    &:hover {
      // transform: scale(1.05) translateZ(0px);
    }
  }
</style>
