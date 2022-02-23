<template>
  <q-layout view="lHh Lpr lFf">
    <div class="website-title">Prep'Archives</div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
});
</script>

<style lang="scss" scoped>
</style>
