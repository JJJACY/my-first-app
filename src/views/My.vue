<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar" color="warning">
        <ion-title class="toolbar-title">MY</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <TheToast show-message="123" />
      <ion-card class="my-card">
        <ion-grid class="my-grid">
          <ion-row>
            <ion-col>
              <BaseSelect 
                v-model:newValue="state.sports"
                placeholder="运动类型" 
                text="null"
                :selectData="state.sportsList"
                :readonly="true">
              </BaseSelect>
            </ion-col>
            <ion-col>
              <BaseSelect 
                v-model:newValue="state.residenceTypeText"
                placeholder="食物类型" 
                text="null"
                :selectData="state.residenceType"
                :readonly="true">
              </BaseSelect>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <van-cell is-link title="基础用法" @click="show = true" />
        <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
    </ion-content>
    
    <!-- <TabBar /> -->
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// import TabBar from './../components/TabBar.vue'
import TheToast from './../components/TheToast.vue'
import { Toast } from 'vant';
import BaseSelect from '@/components/BaseSelect.vue'
import { 
  IonPage,
  IonHeader, 
  IonToolbar,
  IonTitle, 
  IonContent,
  IonCard,
  IonCol, IonGrid, IonRow
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
    IonCard,
    IonCol, IonGrid, IonRow,
    // TabBar,
    TheToast,
    BaseSelect
    // IonButton,
    // IonList,
    // IonItem,
    // IonLabel,
  },
  setup() {
    const state = reactive({
      residenceType: ['糖果', '饼干', '饮料'],
      residenceTypeText: '',
      sportsList: [ '跑步','游泳','射击'],
      sports: ""
    })
    const arr = [
      {
        id: 6324,
        name:" mata川",
        sport: '射击'
      },{
        id: 999999,
        name:'旭旭宝宝',
        sport: '游泳'
      }, {
        id: 7911,
        name: 'GodV',
        sport: '跑步'
      }
    ]
    
    const clickB = () =>{
      const value = arr.filter(item=>{
        return item.sport === state.sports
      })
      console.log(value,111)
    }

    const show = ref(false);
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' },
    ];
    const onSelect = (item: any) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show.value = false;
      Toast(item.name);
    };

    return {
      state,
      clickB,

       show,
      actions,
      onSelect,
    }
  }
});
</script>
<style type="text/css" scoped>
.toolbar {
  --border-color: #ffffff;
}

.toolbar-title {
  color: #ffffff;
}

.my-card {
  margin: 0;
}

.my-grid {
  --ion-grid-padding: 0;
}

</style>
