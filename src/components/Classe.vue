<template>
  <div class="item general-button" @click="goTo(name)">
    {{ name }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Classe",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    goTo(portail) {
      this.$router.push({ name: "portail", query: { prepaType: portail } });
    },
  },
});
</script>

<style lang="scss" scoped>
.item {
  margin: 20px;
}
</style>
