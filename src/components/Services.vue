<template>
  <div id="services">
    <h1>Testimonials</h1>


    <!-- swiper -->
    <swiper :options="swiperOption">
      <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"
           style="background-image: url(); opacity: 1;">
      </div>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Herzlich Willkommen zu Prince of Bel Hair</div>
        <br>
        <div class="subtitle" data-swiper-parallax="-200">Wir freuen uns auf Ihren Besuch.</div>
        <div class="text" data-swiper-parallax="-300">
          <p></p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-200"></div>
        <div class="text" data-swiper-parallax="-300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-300">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          parallax: true,
          speed: 600,
          autoplay: 5000,
          loop: true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  #services {
    text-align: center;
    background-color: #1B1C1D;
    padding-top: 40px;
  }

  #services h1 {
    font-size: 50px;
    color: #C3982F;
    font-family: "Bodoni 72";
  }

  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 60px 60px;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .swiper-slide .title {
    z-index: 101;
    font-size: 51px;
    font-weight: 700px;
    color: #C3982F;
    font-family: "Bodoni 72";
  }
  .swiper-slide .subtitle {
    font-size: 26px;
    text-decoration: overline;
    color: #C3982F;
    z-index: 102;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
    color: white;
    z-index: 102;
    background: rgba(220, 189, 111, 0.3);
  }


</style>
