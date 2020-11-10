<template>
  <main v-if="persons" class="homepage main">
    <div class="container homepage__container">
      <h1 class="homepage__title">Список персонажей</h1>
      <ul
        v-if="persons.results && persons.results.length"
        class="homepage__listing"
      >
        <li
          v-for="(person, key) in persons.results"
          :key="key"
          class="homepage__listing-item"
        >
          <PersonCard :person="person" />
        </li>
      </ul>
      <div class="homepage__pagination">
        <button
          v-if="persons.previous"
          class="homepage__pagination-link"
          @click="getPersons(persons.previous)"
        >
          Предыдущая страница
        </button>
        <button
          v-if="persons.next"
          class="homepage__pagination-link"
          @click="getPersons(persons.next)"
        >
          Следующая страница
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonCard from "@/components/person-card/person-card.vue";
import { Action, State } from "vuex-class";

@Component({
  components: {
    PersonCard
  }
})
export default class Homepage extends Vue {
  @State((state: any) => state.persons) persons: any;
  @Action("getPersons") getPersons: any;
}
</script>
<style src="./homepage.css"></style>
