<script setup>
import signature from "../assets/RR_Unterschrift3.png";
const pdfUrl = new URL(
  `${import.meta.env.BASE_URL}Richard Raetzer, Lebenslauf 2025 (public).pdf`,
  import.meta.url
).href;
</script>

<template>
  <div>
    <h1>Richard Raetzer</h1>
    <p v-html="$t('home.text1')"></p>
    <img
      :src="signature"
      alt=""
      style="height: 3rem"
      class="invertable-image"
    />
    <br /><br /><br /><br />
    <a :href="pdfUrl" class="cta-button with-icon" download>
      <span class="material-icons">download</span>
      <span v-html="$t('home.b_download_cv')"></span>
    </a>

    <p>
      <span v-html="$t('home.text2')"></span>
      <a href="mailto:ripara4@gmail.com">ripara4@gmail.com</a>.
    </p>
    <br /><br />
    <!-- <h2>Hobbys</h2>
    <ul>
      <li>Badminton</li>
      <li>Fahrrad-Touren</li>
      <li>Künstlerisches Gestalten</li>
      <li>Game Development</li>
      <li>App Development</li>
    </ul> -->
    <!-- <h2>Hobbies</h2> 
      <ul> 
      <li>Badminton</li> 
      <li>Bicycle touring</li> 
      <li>Artistic design</li> 
      <li>Game Development</li> 
      <li>App Development</li> 
    </ul> -->
  </div>
</template>
