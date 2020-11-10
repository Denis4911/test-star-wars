<template>
  <router-link :to="'/person/' + personId" class="person-card">
    <p v-if="person.name" class="person-card__name">{{ person.name }}</p>
    <ul class="person-card__params">
      <li
        v-if="person.birth_year && person.birth_year !== 'unknown'"
        class="person-card__params-item"
      >
        <span class="person-card__params-item-param">Год рождения:</span>
        <span class="person-card__params-item-value">{{
          person.birth_year
        }}</span>
      </li>
      <li
        v-if="person.gender && person.gender !== 'n/a'"
        class="person-card__params-item"
      >
        <span class="person-card__params-item-param">Пол:</span>
        <span class="person-card__params-item-value">{{ person.gender }}</span>
      </li>
      <li v-if="person.height" class="person-card__params-item">
        <span class="person-card__params-item-param">Рост:</span>
        <span class="person-card__params-item-value">{{ person.height }}</span>
      </li>
    </ul>
    <button class="person-card__details">Подробнее</button>
  </router-link>
</template>
<script lang="ts" src="./person-card.ts"></script>
<style src="./person-card.css"></style>
