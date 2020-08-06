<template>
    <nav>
        <div class="container">
            <div class="grid">
                <div class="col-xs-12 col-md-6 no-padding-left">
                    <figure class="media animated fadeIn delay-hs">
                      <div class="logo">
                        <router-link to="/">
                          <img src="../assets/images/self.jpg" alt="" />
                        </router-link>
                      </div>
                      <figcaption class="logo-content">
                          <span>Mitchures</span>
                      </figcaption>
                    </figure>
                </div>
                <div class="col-xs-12 col-md-6 no-padding-x">
                    <ul class="animated fadeIn delay-hs">
                        <li>
                            <router-link to="/iceland">Iceland</router-link>
                        </li>
                        <li>
                            <router-link to="/canada">Canada</router-link>
                        </li>
                        <li>
                            <router-link to="/japan">Japan</router-link>
                        </li>
                        <li>
                            <router-link to="/unitedstates">United States</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>
