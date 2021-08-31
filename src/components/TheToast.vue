<template>
  <ion-button class="confirm-btn" @click="setOpen(true)">Show Toast</ion-button>
  <ion-toast
    class="my-toast"
    :is-open="isOpenRef"
    message="Your settings have been saved."
    :duration="90000"
    position="middle"
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


<style scoped>
.confirm-btn {
  --background: #ccc;
  --color: red;
  --background-activated: #000000; 
  --background-activated-opacity: 0.1;
}
/* .toast-wrapper{
  --background: #ccc !important;
} */
</style>