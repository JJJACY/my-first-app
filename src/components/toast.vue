<template>
  <ion-button @click="handleClickToast">點擊以下</ion-button>
</template>
<script lang="ts">
import {
  IonButton
} from '@ionic/vue'
import { defineComponent } from 'vue';
import { Plugins } from '@capacitor/core';

export default defineComponent({
  components: {
    IonButton
  },
  setup() {
    const { Toast } = Plugins; //引入toast插件
    const handleClickToast = async () => {
      await Toast.show({
        text: 'hello world',
        position: 'center',
        duration: 'short'
      })
    }
    return {
      handleClickToast
    }
  }
});
</script>
<style type="text/css" lang="less" scoped></style>
