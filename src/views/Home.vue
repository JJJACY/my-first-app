<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar" color="success">
        <ion-title class="toolbar-title">Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <p><strong>Ready to create an app?</strong></p>
        <ul>
          <!-- <li v-for="item in cityData.list" :key="item.id">
            {{ item.name }}
          </li> -->
          {{cityData.list}}
        </ul>
        <ion-button
          v-for="item in BtnData.btnInfo"
          :key="item.id"
          size="small"
          @click="handleClickButton(item.id)"
        >
          {{ item.name }}
        </ion-button>
        <ion-button @click="setOpen(true)">Show Alert</ion-button>
        <ion-alert
          :is-open="isOpenRef"
          header="Alert"
          sub-header="Subtitle"
          message="This is an alert message."
          css-class="my-custom-class"
          :buttons="buttons"
          @didDismiss="setOpen(false)"
        >
        </ion-alert>
        <Toast />
      </div>
    </ion-content>
    <TabBar />
  </ion-page>
</template>

<script lang="ts">
import {
  onIonViewWillEnter,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonAlert,
  alertController,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import Toast from "./../components/toast.vue";
import TabBar from "./../components/TabBar.vue";
// import { getKey,setKey,deleteKey} from './../global/storage/storage'
import SomeService from "@/global/service/news";


export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonAlert,
    Toast,
    TabBar,
  },
  setup() {
    const cityData = reactive({
      list: [],
    });
    const id = 3
    SomeService.all(id).then((res: any) => {
      cityData.list = res;
    });

    onIonViewWillEnter(()=>{
      console.log('进入页面开始获取数据！！！')
      // SomeService.all().then((res: any) => {
      //   cityData.list = res.list;
      // });
    })

    const ShowMessage = async (msg: string) => {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "提示",
        subHeader: `${msg}`,
        buttons: ["確認"],
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    };

    const BtnData = reactive({
      btnInfo: [
        {
          id: 1,
          name: "是",
        },
        {
          id: 2,
          name: "否",
        },
      ],
    });

    const handleClickButton = (val: number) => {
      val === 1 ? ShowMessage("你选择了---是") : ShowMessage("你选择了---否");
    };

    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    const buttons = ["Ok"];

    return {
      cityData,
      ShowMessage,
      BtnData,
      handleClickButton,
      buttons,
      isOpenRef,
      setOpen,
    };
  },
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