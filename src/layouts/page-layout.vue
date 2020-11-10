<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/header/header.vue";

@Component({
  components: {
    Header
  }
})
export default class PageLayout extends Vue {}
</script>
