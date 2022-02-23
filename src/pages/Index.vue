<template>
  <div class="welcome">
    Bienvenue sur Prep'Archives ! Le site référence pour les annales de concours
  </div>
  <div class="general-buttons">
    <Classe
      v-for="classe in classes"
      :key="classe"
      :name="classe.name"
    ></Classe>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Classe from "components/Classe.vue";

export default defineComponent({
  components: { Classe },
  name: "PageIndex",
  data() {
    return {
      classes: [
        { name: "MPSI-MP" },
        { name: "PCSI-PC" },
        { name: "PCSI-PSI" },
        { name: "PTSI-PT" },
        { name: "BCPST" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
