<template>
  <div>
    <ion-list class="my-list">
      <ion-item v-for="item in data.list" :key="item.id" @click="handleClickItem(item)" lines="none">
        {{item.name}}
      </ion-item>
    </ion-list>
  </div>
</template>
<script lang="ts">
import {
  IonList,
  IonItem
} from "@ionic/vue";
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "navBar",
  components: {
    IonList,
    IonItem
  },
  setup() {
    const Router = useRouter()
    const data = reactive({
      list: [
        {
          id:1,
          name:'test-1',
          url: 'testOne'
        },
        {
          id:2,
          name:'test-2',
          url: 'testTwo'
        },
        {
          id:3,
          name:'test-3',
          url: 'testHree'
        }
      ]
    })
    const handleClickItem = ((item: any) =>{
      Router.replace(item.url)
    })
    return {
      data,
      handleClickItem
    }
  }
});
</script>
<style type="text/css" scoped>
.my-list {
  display: flex;
  flex-direction: row;
}
</style>
