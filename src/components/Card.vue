<template>
  <router-link :to="route">
    <div class="card" :style="style">
      <div class="card__content">
        <div class="card__header">
          <div class='card__title'>
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
    },
  }
</script>

<style lang="scss">
  .card {
    background-position: center;
    background-size: cover;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &__content {
      height: 100%;
      width: 0;
      opacity: 0;
      -webkit-backdrop-filter: blur(25px) saturate(120%);
      backdrop-filter: blur(25px) saturate(120%);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    &__header {
      z-index: 1;
      height: 100%;
      position: relative;
      padding: 25px;
      color: #fff;
    }
    &__title {
      font-weight: 800;
      text-transform: uppercase;
      font-size: 1.5rem;
      writing-mode: vertical-rl;
    }
    &:hover {
      .card__content {
        opacity: 1;
        width: 100%;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .card {
      &__content {
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
