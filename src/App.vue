<script setup>
import signature from "./assets/profileFade2_small.jpg";

import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const savedLocale = localStorage.getItem("locale");
if (savedLocale) locale.value = savedLocale;
const isGerman = ref(locale.value === "de");

const toggleLanguage = () => {
  locale.value = isGerman.value ? "de" : "en";
};

watch(
  () => locale.value,
  (newLocale) => {
    localStorage.setItem("locale", newLocale);
  }
);
</script>

<template>
  <div class="layout">
    <div class="sidebar">
      <div>
        <div class="profile-section">
          <img :src="signature" alt="Profile picture" class="profile-picture" />
          <h2 class="profile-name">Richard Raetzer</h2>
        </div>

        <div style="height: 2rem"></div>

        <nav class="nav-links">
          <RouterLink to="/home" class="nav-button with-icon">
            <span class="material-icons">home</span>
            <span v-html="$t('nav.home')"></span>
          </RouterLink>
          <RouterLink to="/career" class="nav-button with-icon">
            <span class="material-icons">stairs</span>
            <span v-html="$t('nav.career')"></span>
          </RouterLink>
          <RouterLink to="/skills" class="nav-button with-icon">
            <span class="material-icons">format_list_bulleted</span>
            <span v-html="$t('nav.skills')"></span>
          </RouterLink>
          <RouterLink to="/projects" class="nav-button with-icon">
            <span class="material-icons">inventory_2</span>
            <span v-html="$t('nav.projects')"></span>
          </RouterLink>
          <!-- <RouterLink to="/private-projects" class="nav-button with-icon">
            <span class="material-icons">lightbulb</span>
            <span>{{ $t('nav.projectsPrivate') }}</span>
          </RouterLink> -->
        </nav>
      </div>

      <div class="contact-info">
        <br /><br /><br /><br />
        <div class="language-toggle">
          <span class="flag">🇺🇸</span>
          <label class="switch">
            <input
              type="checkbox"
              v-model="isGerman"
              @change="toggleLanguage"
            />
            <span class="slider"></span>
          </label>
          <span class="flag">🇩🇪</span>
        </div>
        <br /><br />
        <p>
          <strong>{{ $t("contact.address") }}:</strong><br />{{
            $t("contact.address_val")
          }}
        </p>
        <p>
          <strong>{{ $t("contact.email") }}:</strong>
          <br /><a href="mailto:ripara4@gmail.com">ripara4@gmail.com </a>
        </p>
        <p>
          <strong>{{ $t("contact.birthdate") }}:</strong><br />2002
        </p>
        <p>
          <strong>{{ $t("contact.birthplace") }}:</strong><br />{{
            $t("contact.birthplace_val")
          }}
        </p>
      </div>
    </div>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
