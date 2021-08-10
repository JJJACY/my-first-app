<template>
  <ion-button @click="setOpen(true)" color="warning">Show Toast</ion-button>
  <ion-toast
    :is-open="isOpenRef"
    message="Your settings have been saved."
    :duration="2000"
    @didDismiss="setOpen(false)"
  >
  </ion-toast>
</template>

<script lang="ts">
import { IonToast, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonToast, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;

    return { isOpenRef, setOpen }
  }
});
</script>