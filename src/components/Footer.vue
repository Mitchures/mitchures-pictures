<template>
  <footer>
    <div class="container">
      <div class="grid">
        <div class="col-xs-12">
          <ul class="social">
            <li :key="key" v-for="(s, key) in social">
              <a
                class="link"
                :href="s.url"
                :title="s.name"
                target="_blank"
                rel="noopener noreferrer">
                {{ s.name }}
              </a>
            </li>
          </ul>
          <p className="copyright">&copy; {{new Date().getFullYear()}} Mitchell Hollander</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data () {
      return {
        social: [
          {
            name: `Instagram`,
            url: `https://www.instagram.com/mitchures.co/`
          },
          {
            name: `Facebook`,
            url: `https://www.facebook.com/profile.php?id=100008081385480`
          },
          {
            name: `Pinterest`,
            url: `https://www.pinterest.com/MitchellH07/`
          },
          {
            name: `Github`,
            url: `https://github.com/mitchures`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/mitchell-hollander-93737893`
          },
          {
            name: `VSCO`,
            url: `https://vsco.co/mitchures/`
          }
        ]
      }
    }
  }
</script>
