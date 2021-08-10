<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar" color="secondary">
        <ion-title class="toolbar-title">news</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="page-content">
      <TheInput :myInput="Data.inputValue" @change-input="changeInput"/>
      <ion-label success="warning">{{Data.inputValue}}</ion-label>
    </ion-content>
    <TabBar />
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TabBar from './../components/TabBar.vue'
import TheInput from './../components/TheInput.vue'
import { 
  IonPage,
  IonHeader, 
  IonToolbar,
  IonTitle, 
  IonContent, 
  // IonButton,
  // IonList,
  // IonItem,
  IonLabel,
  
  
} from '@ionic/vue';
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TabBar,
    TheInput,
    // IonButton,
    // IonList,
    // IonItem,
    IonLabel,
  },
  setup() {
    const Data = reactive({
      inputValue: ''
    })
    const changeInput = (value: string) => {
      Data.inputValue = value
    }
    return {
      Data,
      changeInput
    }
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

.page-content {
  --padding-start: 20px;
  --padding-end: 20px;
  --padding-bottom: 20px;
  --padding-top: 20px;
}
</style>
