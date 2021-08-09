<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar" color="success"> 
        <ion-title class="toolbar-title">首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">    
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <Toast />
      </div>
    </ion-content>
    <TabBar />
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Toast from './../components/toast.vue'
import TabBar from './../components/TabBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Toast,
    TabBar
  }
});
</script>

<style scoped>
.toolbar {
  --border-color: #ffffff;
}

.toolbar-title {
  color: #ffffff;
}
</style>