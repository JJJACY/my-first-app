<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar" color="warning">
        <ion-title class="toolbar-title">MY</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <TheToast />
    </ion-content>
    <TabBar />
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TabBar from './../components/TabBar.vue'
import TheToast from './../components/TheToast.vue'
import { 
  IonPage,
  IonHeader, 
  IonToolbar,
  IonTitle, 
  IonContent, 
  // IonButton,
  // IonList,
  // IonItem,
  // IonLabel,
  
  
} from '@ionic/vue';
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TabBar,
    TheToast
    // IonButton,
    // IonList,
    // IonItem,
    // IonLabel,
  },
});
</script>
<style type="text/css" scoped>
.toolbar {
  --border-color: #ffffff;
}

.toolbar-title {
  color: #ffffff;
}

</style>
