<template>
  <router-link :to="route">
    <div class="card" :style="style">
      <div class="card-content">
        <div class="card-header">
          <div class='card-count'>{{ imageCount }}</div>
          <div class='card-title'>
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        default: null
      },
      cover: {
        type: String,
        default: null
      },
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "350px",
      }
    },
    computed: {
      imageCount () {
        const r = require.context("../assets/images/photography/", true, /\.jpg$/);
        let count = 0;
        r.keys().map(key => {
          if (key.includes(this.title)) {
            count++;
          }
        });
        if (count < 10)
          return '0' + count;
        else
          return count;
      },
      style () {
        const r = require.context("../assets/images/photography/", true, /\.jpg$/);
        const style = {};
        r.keys().map(key => {
          if (this.cover) {
            if (key.includes(this.cover.replace(" ", ""))) {
              style.backgroundImage = `url('${r(key)}')`;
            }
          }
          else {
            if (key.includes(this.title) && key.includes("cover")) {
              style.backgroundImage = `url('${r(key)}')`;
            }
          }
        });
        if (this.width) style.width = `${this.width}`;
        if (this.height) style.height = `${this.height}`;
        return style;
      },
      route () {
        const route = {};
        route.name = this.title.replace(" ", "");
        return route;
      }
    }
  }
</script>

<style lang="scss">
  .card {
    background-position: center;
    background-size: cover;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    .card-content {
      height: 100%;
      width: 0;
      opacity: 0;
      backdrop-filter: blur(25px) saturate(120%);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      .card-header {
        z-index: 1;
        height: 100%;
        position: relative;
        padding: 25px;
        color: #fff;
        .card-count {
          font-weight: 200;
          font-size: 2rem;
          position: absolute;
          bottom: 20px;
          right: 25px;
        }
        .card-title {
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

  @media (prefers-color-scheme: dark) {
    .card {
      .card-content {
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
