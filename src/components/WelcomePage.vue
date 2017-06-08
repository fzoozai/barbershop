<template>
  <div id="welcome">
    <section class="hero is-fullheight is-black">
      <div class="hero-head">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h3 class="title is-2">
            <a style="font-family: 'Andale Mono'; font-size: 60px; color: darkgrey">



              <div class="flexbox">
                <div class="button is-large">Testdaten exportieren</div>
                <div class="button is-large">Testdaten importieren</div>
              </div>
            </a>
          </h3>
          <h3 class="subtitle is-4" style="text-decoration: overline; padding-top: 30px; font-size: 25px; color: darkgrey"></h3>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a>And this at the bottom</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

  export default {
  }

</script>

<style scoped>
  #welcome {
    margin-top: 7px;
  }

  .flexbox {
    display: flex;
    justify-content: space-around;
  }

</style>
