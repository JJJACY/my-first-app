<template>
  <ion-page class="layout-page">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start" class="back-buttons">
          <ion-button @click="goBackTo">
            <ion-icon :icon="chevronBackOutline" style="color: #ffffff;"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title class="title"> page-header </ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle
} from "@ionic/vue";
import { chevronBackOutline } from 'ionicons/icons'
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle
  },
  setup() {
    const Router = useRouter();
    const goBackTo = () =>{
      Router.push({name:'Home'})
    }
    return {
      chevronBackOutline,
      goBackTo
    }
  }
});
</script>

<style scoped>
.layout-page {
  background: #ffffff;
}

.toolbar {
  --background: #00A0E9;
  --border-color: #00A0E9;
}

.title {
  color: #ffffff;
  font-family: SourceHanSansSC-Regular;
}

.md .header-md .header-collapse-none .hydrated::after {
  display: none;
}
</style>