<template>
  <vxe-table
    border
    show-overflow
    show-footer
    keep-source
    ref="xTable"
    height="600"
    class="my-xtable-element"
    :loading="demo1.loading"
    :data="demo1.tableData"
    :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
  >
    <vxe-column type="seq" width="80">
      <template #header>
        <span>序号</span>
        <i class="el-icon-question"></i>
      </template>
    </vxe-column>
    <vxe-column field="name" title="ElInput" min-width="140" :edit-render="{}">
      <template #edit="scope">
        <el-input
          v-model="scope.row.name"
          @input="$refs.xTable.updateStatus(scope)"
        ></el-input>
      </template>
    </vxe-column>

    <vxe-column field="sex" title="ElSelect" width="140" :edit-render="{}">
      <template #edit="scope">
        <el-select
          v-model="scope.row.sex"
          @change="$refs.xTable.updateStatus(scope)"
        >
          <el-option
            v-for="item in demo1.sexList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
      <template #default="{ row }">{{
        getSelectLabel(row.sex, demo1.sexList)
      }}</template>
    </vxe-column>
  </vxe-table>
</template>

<script setup>
import { reactive, ref } from 'vue'

const xTable = ref({})

const demo1 = reactive({
  loading: false,
  tableData: [],
  sexList: [
    { value: '1', label: '男' },
    { value: '0', label: '女' }
  ]
})

// const formatDate = (value, format) => {
//   return XEUtils.toDateString(value, format)
// }

const getSelectLabel = (
  value,
  list,
  valueProp = 'value',
  labelField = 'label'
) => {
  const item = list.find((item) => item[valueProp] === value)
  return item ? item[labelField] : null
}

demo1.loading = true
setTimeout(() => {
  demo1.tableData = [
    {
      id: 10001,
      name: 'Test1',
      nickname: 'T1',
      role: 'Develop',
      sex: '0',
      sex1: [],
      state: '',
      region: [],
      age: 28,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 5,
      rate1: 59,
      flag: false,
      address: 'Shenzhen'
    },
    {
      id: 10002,
      name: 'Test2',
      nickname: 'T2',
      role: 'Test',
      sex: '1',
      sex1: [],
      state: '',
      region: [],
      age: 22,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 2,
      rate1: 22,
      flag: false,
      address: 'Guangzhou'
    },
    {
      id: 10003,
      name: 'Test3',
      nickname: 'T3',
      role: 'PM',
      sex: '0',
      sex1: [],
      state: '',
      region: [],
      age: 32,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 3,
      rate1: 12,
      flag: false,
      address: 'Shanghai'
    },
    {
      id: 10004,
      name: 'Test4',
      nickname: 'T4',
      role: 'Designer',
      sex: '0',
      sex1: ['1', '0'],
      state: '',
      region: [],
      age: 23,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      color1: '',
      tree1: '',
      tree2: [],
      date7: '',
      rate: 33,
      rate1: 4,
      flag: true,
      address: 'Shenzhen'
    },
    {
      id: 10005,
      name: 'Test5',
      nickname: 'T5',
      role: 'Develop',
      sex: '0',
      sex1: ['1', '0'],
      state: '',
      region: [],
      age: 30,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      color1: '',
      tree1: '',
      tree2: [],
      date7: '',
      rate: 0,
      rate1: 15,
      flag: true,
      address: 'Shanghai'
    },
    {
      id: 10006,
      name: 'Test6',
      nickname: 'T6',
      role: 'Designer',
      sex: '0',
      sex1: [],
      state: '',
      region: [],
      age: 21,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 3,
      rate1: 73,
      flag: false,
      address: 'Shenzhen'
    },
    {
      id: 10007,
      name: 'Test7',
      nickname: 'T7',
      role: 'Test',
      sex: '1',
      sex1: ['1'],
      state: '',
      region: [],
      age: 29,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 0,
      rate1: 0,
      flag: true,
      address: 'Guangzhou'
    },
    {
      id: 10008,
      name: 'Test8',
      nickname: 'T8',
      role: 'Develop',
      sex: '1',
      sex1: [],
      state: '',
      region: [],
      age: 35,
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: [],
      date5: '',
      date7: '',
      color1: '',
      tree1: '',
      tree2: [],
      rate: 2,
      rate1: 14,
      flag: false,
      address: 'Shenzhen'
    },
    {
      id: 10009,
      name: 'Test9',
      nickname: 'T9',
      role: 'Test',
      sex: '1'
    },
    {
      id: 100010,
      name: 'Test10',
      nickname: 'T10',
      role: 'Develop',
      sex: '1'
    }
  ]
  demo1.loading = false
}, 500)
</script>

<style></style>
