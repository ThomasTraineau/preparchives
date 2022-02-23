<template>
  <div>
    <div class="welcome">Annales de prépas {{ prepaType }}</div>
    <div class="q-pa-md">
      <div class="matiere-button">
        <q-btn-dropdown color="primary" :label="matiere">
          <q-list>
            <q-item
              v-for="item in matieres"
              :key="item"
              clickable
              v-close-popup
              @click="loadMatiere(item)"
            >
              <q-item-section>
                <q-item-label>{{ item }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <q-table
      v-if="matiere != 'Matière'"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Classe from "components/Classe.vue";
import $ from "jQuery";

export default defineComponent({
  components: { Classe },
  name: "Annales",
  data() {
    return {
      prepaType: null,
      matieres: [],
      matiere: "Matière",
      json: [],
      sections: [
        { text: "Annales de concours", section: "annales" },
        { text: "Blogs de professeurs", section: "blogs" },
      ],
    };
  },
  mounted() {
    $.getJSON("files/" + this.prepaType + "/matieres.json", (matieres) => {
      this.matieres = matieres;
    });
  },
  created() {
    this.prepaType = this.$route.query.prepaType;
  },
  methods: {
    loadMatiere(matiere) {
      this.matiere = matiere;
      $.getJSON(
        "files/" + this.prepaType + "/" + matiere + "/index.json",
        (json) => {
          this.json = json.data;
        }
      ).then(() => {
        console.log(this.matieres);
      });
      for (item in this.json) {
        console.log(item);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.matiere-button {
  text-align: center;
}
</style>
