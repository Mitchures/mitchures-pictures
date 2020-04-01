<template>
    <nav>
        <div class="container">
            <div class="grid">
                <div class="col-xs-12 col-md-6 no-padding-left">
                  <router-link to="/">
                    <figure class="media">
                      <div class="logo">
                          <img src="../assets/images/self.jpg" alt="" />
                      </div>
                      <figcaption class="logo-content">
                          <span>Mitchures</span>
                      </figcaption>
                    </figure>
                  </router-link>
                </div>
                <div class="col-xs-12 col-md-6 no-padding-x">
                    <ul>
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
                            <router-link to="/asheville">Asheville</router-link>
                        </li>
                        <li>
                            <router-link to="/nashville">Nashville</router-link>
                        </li>
                        <li>
                            <router-link to="/neworleans">Nola</router-link>
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
