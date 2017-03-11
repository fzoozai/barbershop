<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../../img/logo.png" alt="Belhair logo">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
      <span class="icon">
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
      </span>
      </a>
      <a class="nav-item">
      <span class="icon">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </span>
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-mobile"
         :class="{'is-active' : this.activeTab === 'home'}"
         @click="setActive('home')"
      >
        {{ home }}
      </a>
      <a class="nav-item is-tab is-hidden-mobile"
         :class="{'is-active' : this.activeTab === 'team'}"
         @click="setActive('team')"
      >
        {{ team }}
      </a>
      <a class="nav-item is-tab is-hidden-mobile"
         :class="{'is-active' : this.activeTab === 'services'}"
         @click="setActive('services')"
      >
        {{ services }}
      </a>

      <span class="nav-item">

      <a class="button">
        <span class="icon">
          <i class="fa fa-address-card" aria-hidden="true"></i>
        </span>
        <span>&nbsp;by Kahled</span>
      </a>

    </span>
    </div>
  </nav>
</template>

<!-------------------------------------------------------------------------------------------->


<script>
  export default {
    name:'nav-menu',
    data () {
        return {
            home: 'Startseite',
            team: 'Team',
            services: 'Leistungsspektrum',

            activeTab: 'home'
        }
    },
    methods: {
      setActive: function (tab) {
          this.activeTab = tab;
      }
    }
  }
</script>


<!-------------------------------------------------------------------------------------------->
<style scoped>

  .nav-item a.is-tab.is-active, a.nav-item.is-tab.is-active {
    border-bottom: 3px solid #C3982F;
    color: #C3982F;
  }

  .nav-item img {
    max-height: 5.75rem;
  }
  .nav-item a, a.nav-item {
    font-size: 15px;
  }
</style>
