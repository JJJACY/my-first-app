<template>
  <ion-page>
    <the-header></the-header>
    <ion-content>
      <nav-bar></nav-bar>
      <div>page-3</div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonPage,
  IonContent
} from "@ionic/vue";
import { defineComponent } from 'vue';
import navBar from '@/components/navBar.vue'
import theHeader from '@/components/theHeader.vue'
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    navBar,
    theHeader
  },
});
</script>
<style type="text/css" scoped></style>
