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
         :class="{'is-active' : IsHomeActive}"
         @click="setActiveHome"
      >
        {{ home }}
      </a>
      <a class="nav-item is-tab is-hidden-mobile"
         :class="{'is-active' : IsTeamActive}"
         @click="setActiveTeam"
      >
        {{ team }}
      </a>
      <a class="nav-item is-tab is-hidden-mobile"
         :class="{'is-active' : IsServiceActive}"
         @click="setActiveService"
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





<script>


  export default {
    name:'nav-menu',
    data () {
        return {
            IsHomeActive: true,
            IsTeamActive: false,
            IsServiceActive: false,
            home: 'Startseite',
            team: 'Team',
            services: 'Leistungsspektrum',
            activeTab: ''
        }
    },
    methods: {
      setActive: function (tab) {
          this.activeTab = tab
      },
      setActiveTeam: function () {
        this.activeTab = 'team' && (this.IsTeamActive = this.activeTab === 'team') &&
          (this.IsHomeActive = this.activeTab === 'home') &&
          (this.IsServiceActive = this.activeTab === 'services');
      },

      setActiveService: function () {
        this.activeTab = 'services' && (this.IsServiceActive = this.activeTab === 'services') &&
          (this.IsHomeActive = this.activeTab === 'home') &&
          (this.IsTeamActive = this.activeTab === 'team');
      }
    }
  }



</script>

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
