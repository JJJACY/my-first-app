<template>
  <ion-tab-bar slot="top">
    <ion-tab-button tab="home" href="/home">
      <ion-icon :icon="logoVue"></ion-icon>
      <ion-label>首頁</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="news" href="/news">
      <ion-icon :icon="logoApple"></ion-icon>
      <ion-label>資訊</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="my" href="/my">
      <ion-icon :icon="logoOctocat" />
      <ion-label>我的</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script lang="ts">
import { IonTabBar, IonLabel, IonIcon, IonTabButton } from '@ionic/vue';
// import { settings } from 'ionicons/icons';
// import { IonIcon } from '@ionic/vue';
import { logoApple,logoVue,logoOctocat } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainTabs',
  components: {  IonTabBar, IonLabel, IonIcon, IonTabButton },
  setup() {
    return {
      // settings
      logoApple,
      logoVue,
      logoOctocat
    }
  }
});
</script>

<style scoped>
.ion-page {
  background: #ffffff !important;
}

ion-content {
  background: #ffffff !important;
}

ion-tab-bar {
  background: #ffffff !important;
  border-top: 1px solid #d7d8da;
}

ion-tab-button {
  --color-selected: #3eaf7c !important;
  background: #ffffff !important;
}
</style>