<template>
  <h1><span v-html="$t('career.t_career')"></span></h1>

  <div class="cv-section">
    <h2><span v-html="$t('career.t_academic')"></span></h2>
    <table class="cv-table">
      <tbody>
        <tr>
          <td class="cv-left">08/2020 - 02/2025</td>
          <td>
            <span v-html="$t('career.academic.1-1')"></span><br />
            <span v-html="$t('career.academic.1-2')"></span>
          </td>
        </tr>
        <tr>
          <td class="cv-left">08/2008 - 06/2020</td>
          <td>
            <span v-html="$t('career.academic.2-1')"></span><br />
            <span v-html="$t('career.academic.2-2')"></span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2><span v-html="$t('career.t_professional')"></span></h2>
    <table class="cv-table">
      <tbody>
        <tr>
          <td class="cv-left">
            04/2024 - <span v-html="$t('career.present')"></span>
          </td>
          <td>
            <span v-html="$t('career.professional.1-1')"></span><br />
            <span v-html="$t('career.professional.1-2')"></span>
          </td>
        </tr>
        <tr>
          <td class="cv-left">10/2023 - 03/2024</td>
          <td>
            <span v-html="$t('career.professional.2-1')"></span><br />
            <span v-html="$t('career.professional.2-2')"></span>
          </td>
        </tr>
        <tr>
          <td class="cv-left">01/2018 - 02/2018</td>
          <td>
            <span v-html="$t('career.professional.3-1')"></span><br />
            <span v-html="$t('career.professional.3-2')"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <br />
  <p v-html="$t('career.text')"></p>
</template>
