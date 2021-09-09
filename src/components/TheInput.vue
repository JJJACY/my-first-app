<template>
  <ion-input 
    v-model="Data.value" 
    placeholder="请输入......"
    class="input"
    clear-input
    @ionChange="handleChangeInput"></ion-input>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed} from 'vue';
import { IonInput } from '@ionic/vue';
export default defineComponent({
  name: 'TheInput',
  components: {
    IonInput
  },
  // props: {
  //   myInput: {
  //     type: String,
  //     default: ''
  //   }
  // },
  setup(props,{emit}) {
    const Data = reactive({
      value: ''
    })
    const handleChangeInput = () => {
      // emit('change-input',Data.value)
      console.log('子组件触发事件')
      emit('update:getjb',Data.value)
    }
    

    const count = ref(1)
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1
      }
    })

    plusOne.value = 1
    
    return {
      Data,
      handleChangeInput
    }
  }
});
</script>
<style type="text/css" scoped>
.input {
  --padding-start: 10px;
  --background: #f9f9f9;
  --placeholder-color: red;
  --color: #3eaf7c;
}
</style>
