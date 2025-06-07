<template>
  <h1>{{ $t("skills.t_skills") }}</h1>

  <div class="cv-section">
    <h2>{{ $t("skills.t_languages") }}</h2>
    <table class="cv-table">
      <tbody>
        <tr>
          <td class="cv-left">
            <ul>
              <li>{{ $t("skills.languages.1-1") }}</li>
              <li>{{ $t("skills.languages.1-2") }}</li>
            </ul>
          </td>
          <td>
            {{ $t("skills.languages.2-1") }}<br />
            {{ $t("skills.languages.2-2") }}<br />
          </td>
        </tr>
      </tbody>
    </table>

    <h2>{{ $t("skills.t_programmingLanguages") }}</h2>
    <table class="cv-table">
      <tbody>
        <tr>
          <td class="cv-left">
            <ul>
              <li>{{ $t("skills.programmingLanguages.1-1") }}</li>
              <li>{{ $t("skills.programmingLanguages.1-2") }}</li>
              <li>{{ $t("skills.programmingLanguages.1-3") }}</li>
              <li>{{ $t("skills.programmingLanguages.1-4") }}</li>
              <li>{{ $t("skills.programmingLanguages.1-5") }}</li>
              <li>{{ $t("skills.programmingLanguages.1-6") }}</li>
            </ul>
          </td>
          <td>
            {{ $t("skills.programmingLanguages.2-1") }}<br />
            {{ $t("skills.programmingLanguages.2-2") }}<br />
            {{ $t("skills.programmingLanguages.2-3") }}<br />
            {{ $t("skills.programmingLanguages.2-4") }}<br />
            {{ $t("skills.programmingLanguages.2-5") }}<br />
            {{ $t("skills.programmingLanguages.2-6") }}<br />
          </td>
        </tr>
      </tbody>
    </table>

    <h2>{{ $t("skills.t_tools") }}</h2>
    <table class="cv-table">
      <tbody>
        <tr>
          <td class="cv-left">
            <ul>
              <li>{{ $t("skills.tools.1-1") }}</li>
              <li>{{ $t("skills.tools.1-2") }}</li>
              <li>{{ $t("skills.tools.1-3") }}</li>
              <li>{{ $t("skills.tools.1-4") }}</li>
              <li>{{ $t("skills.tools.1-5") }}</li>
            </ul>
          </td>
          <td>
            {{ $t("skills.tools.2-1") }}<br />
            {{ $t("skills.tools.2-2") }}<br />
            {{ $t("skills.tools.2-3") }}<br />
            {{ $t("skills.tools.2-4") }}<br />
            {{ $t("skills.tools.2-5") }}<br />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <br />
  <p v-html="$t('skills.text1')"></p>
  <p v-html="$t('skills.text2')"></p>
</template>
