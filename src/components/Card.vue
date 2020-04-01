<template>
  <router-link :to="'/' + title.replace(/\s/g, '').toLowerCase()">
    <div class="card" :style="{ backgroundImage: `url('${require('../assets/images/photography/' + title + '/' + cover + '.jpg')}')`}">
      <div class="card-content">
        <div class="card-header">
          <div class='card-count'>{{ imageCount }}</div>
          <div class='card-title'>{{ title }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'cover'],
    computed: {
      imageCount () {
        const r = require.context("../assets/images/photography/", true, /\.jpg$/);
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
      width: 0;
      opacity: 0;
      // background-color: rgba(166,166,64, 1);
      backdrop-filter: blur(25px) saturate(120%);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      .card-header {
        z-index: 1;
        position: relative;
        padding: 25px;
        .card-count {
          color: #fff;
          font-weight: 200;
          font-size: 2rem;
          position: absolute;
          top: 285px;
          left: 25px;
        }
        .card-title {
          color: #fff;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 1.125rem;
          writing-mode: vertical-rl;
        }
      }
    }
    &:hover {
      .card-content {
        opacity: 1;
        width: 100%;
      }
    }
  }
</style>
