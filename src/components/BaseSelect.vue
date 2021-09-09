<template>
  <div class="select-input" :selectData="selectData" @click="handleClickInput">
    <ion-input
      class="input" 
      v-model="data.value"  
      :placeholder="placeholder"
      :text="text" 
      :clearInput="true"
      :readonly="readonly"
      :slot="position"
      mode="ios"
      ></ion-input>
    <div class="btn">
      <ion-icon :icon="caretDownOutline"></ion-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { IonInput, IonIcon, pickerController } from "@ionic/vue";
import { caretDownOutline } from 'ionicons/icons';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  components: {
    IonInput,
    IonIcon
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: ''
    },
    selectData: {
      type: Array,
      default: () => []
    }
  },
  setup(ctx,{emit}) {
    const data = reactive({
      value: ''
    })
    const getColumnOptions = (
      columnIndex: any,
      numOptions: any,
      columnOptions: any
    ) => {
      const options = [];
      for (let i = 0; i < numOptions; i++) {
        if (typeof columnOptions[columnIndex].data[i] == "object") {          
          options.push({
            text: columnOptions[columnIndex].data[i % numOptions][0],
            value: columnOptions[columnIndex].data[i % numOptions][1],
          });
        } else {
          options.push({
            text: columnOptions[columnIndex].data[i % numOptions],
            value: i,
          });
        }
      }
      return options;
    };

    const getColumns = (numColumns: any, columnOptions: any) => {
      const columns = [];
      for (let i = 0; i < numColumns; i++) {
        const len = columnOptions[i].data.length;
        const colName = columnOptions[i].name || `col-${i}`;
        
        const col = {
          name: colName,
          options: getColumnOptions(i, len, columnOptions),
        };
        columns.push(col);
      }
      return columns;
    };

    const handleClickInput = async () =>{
      const colOptions = [
        {
          name: ctx.text ,
          data: ctx.selectData,
        }
      ];

      const picker = await pickerController.create({
        columns: getColumns(1, colOptions),
        buttons: [
          {
            text: "取消",
            role: "cancel",
          },
          {
            text: ctx.placeholder,
            cssClass: "picker-title"
          },
          {
            text: "確認",
            role: "confirm",
            handler: (value) => {
              data.value = value['null'].text
              emit('update:newValue',data.value)
              picker.dismiss();
            },
          },
        ],
      });
     
      picker.onDidDismiss()
      // present the picker
      await picker.present();
    }
    return {
      caretDownOutline,
      data,
      getColumnOptions,
      getColumns,
      handleClickInput
    }
  }
});
</script>
<style scoped>
.select-input {
  display: flex;
  height: 30px;
  margin: 0;
  border-radius: 4px;
  background: #f9f9f9
}

.input {
  --padding-start: 10px !important;
  --padding-end: 0 !important;
  --background: #f9f9f9;
  --color: #666666;
  --placeholder-color: #333333;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn {
  height: 100%;
  width: 14px;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:active {
  background: #f9f9f9;
  opacity: 0.8;
}

.iconfont {
  font-size: 10px;
}
</style>
