<template>
  <div>
    <div class="welcome">
      Bienvenue sur le portail des prépas {{ prepaType }}
    </div>
    <div class="general-buttons">
      <div
        v-for="section in sections"
        :key="section"
        class="general-button"
        @click="goTo(section.section)"
      >
        {{ section.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Classe from "components/Classe.vue";

export default defineComponent({
  components: { Classe },
  name: "Portail",
  data() {
    return {
      prepaType: "none",
      sections: [
        { title: "Annales de concours", section: "annales" },
        { title: "Blogs de professeurs", section: "blogs" },
        { title: "Cours vidéos", section: "videos" },
      ],
    };
  },
  created() {
    this.prepaType = this.$route.query.prepaType;
  },
  methods: {
    goTo(section) {
      this.$router.push({
        name: section,
        query: { prepaType: this.prepaType },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
