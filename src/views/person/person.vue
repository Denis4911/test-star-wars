<template>
  <main v-if="person" class="main person-page">
    <div class="container person-page__container">
      <h1 class="person-page__name">{{ person.name }}</h1>
      <ul class="person-page__params">
        <li
          v-for="(item, key) in paramsListFiltered"
          :key="key"
          class="person-page__params-item"
        >
          <span class="person-page__params-item-left">{{ item }}: </span>
          <span class="person-page__params-item-right">{{ person[item] }}</span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonCard from "@/components/person-card/person-card.vue";
import { Mutation, State } from "vuex-class";

@Component({
  components: {
    PersonCard
  }
})
export default class PersonPage extends Vue {
  @State((state: any) => state.person) person: any;
  @Mutation("setPerson") setPerson: any;

  get paramsListFiltered() {
    if (this.person) {
      return Object.keys(this.person).filter((param: any) => {
        return param !== "name";
      });
    }
    return null;
  }

  beforeDestroy(): void {
    this.setPerson(null);
  }
}
</script>
<style src="./person.css"></style>
