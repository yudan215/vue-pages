<template>
  <div class="home">
    <div id="nav">
      <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,$index) in detail">
            <a>
              <figure class="wp-avatar banner">
                <img v-cloak :src="item"/>
              </figure>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default { 
 name: 'home', 
 data () { 
  return { 
   detail: [
	   require('../assets/logo.png'),
	   require('../assets/logo.png'),
	   require('../assets/logo.png')
   ] 
  } 
 }, 
 mounted () { 
  this.lunbo() 
 }, 
 methods: { 
   lunbo () {
   	new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      });
   }
 } 
} 
</script>
