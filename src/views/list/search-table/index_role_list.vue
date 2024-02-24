<template>
  <div class="container">
    <Breadcrumb :items="['menu.role.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="$t('menu.list.searchTable')">
      <a-row>
        <a-col :flex="1">
          <a-form :model="formModel" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }" label-align="left">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="roleId" :label="$t('searchTable.columns.name')">
                  <a-input v-model="formModel.roleId" :placeholder="$t('searchTable.form.number.placeholder')" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" :label="$t('searchTable.form.name')">
                  <a-select
                    v-model="formModel.description"
                    :options="contentTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="description" :label="$t('searchTable.form.description')">
                  <a-input v-model="formModel.name" :placeholder="$t('searchTable.form.description.placeholder')" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <!-- 按钮：搜索+重置 -->
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <!-- 按钮：新建 批量导入 -->
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button type="primary" @click="showCreateDialog">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('searchTable.operation.create') }}
            </a-button>
            <!-- <el-button @click="handleClose">取 消</el-button> -->
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('searchTable.operation.import') }}
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col :span="8" style="text-align: right">
          <a-button>
            <template #icon>
              <icon-download />
            </template>
            {{ $t('searchTable.operation.download') }}
          </a-button>
        </a-col>
      </a-row>
      <a-table row-key="id" :loading="loading" :pagination="pagination" :data="renderData" :bordered="false" @page-change="onPageChange">
        <template #columns>
          <a-table-column :title="$t('searchTable.columns.number')" data-index="roleId" />
          <a-table-column :title="$t('searchTable.columns.name')" data-index="name" />
          <a-table-column :title="$t('searchTable.columns.description')" data-index="description" />
          <a-table-column :title="$t('searchTable.columns.operations')" data-index="operations">
            <template #cell>
              <a-button v-permission="['admin']" type="text" size="small">
                {{ $t('searchTable.columns.edit') }}
              </a-button>
              <a-button v-permission="['admin']" type="text" size="small">
                {{ $t('searchTable.columns.delete') }}
              </a-button>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </a-card>
    <!-- 弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      class="el-dialog"
      title="创建角色"
      width="30%"
      :before-close="handleClose"
      :append-to-body="true"
      center
      show-close
    >
      <el-form :model="formRoleData" label-width="80px">
        <el-form-item v-for="(item, index) in list" :key="index" :label="item.label" :prop="item.prop">
          <el-input v-model="formRoleData[item.prop]"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { PolicyParams, PolicyRecord, addRole, queryPolicyList } from '@/api/list_role'
import useLoading from '@/hooks/loading'
import { Options, Pagination } from '@/types/global'
import { ElButton, ElDialog, ElForm, ElFormItem, ElInput } from 'element-plus'
import { computed, defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const generateFormModel = () => {
  return {
    roleId: '',
    name: '',
    description: '',
  }
}

interface FormItem {
  label: string
  prop: string
}
interface FormRoleData {
  roleId: string
  name: string
  description: string
}

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true)
    const { t } = useI18n()
    const renderData = ref<PolicyRecord[]>([])
    const formModel = ref(generateFormModel())

    const basePagination: Pagination = {
      current: 1,
      pageSize: 20,
    }
    const pagination = reactive({
      ...basePagination,
    })

    // 生成唯一ID的方法
    function generateUniqueId(): string {
      // 在这里实现您的唯一ID生成逻辑，可以使用时间戳、UUID等方式
      return Math.random().toString(36).substr(2, 9) // 这里使用了简单的随机字符串
    }

    // 创建表单项列表
    const list = [
      { label: '角色编号', prop: 'roleId' },
      { label: '角色名称', prop: 'name' },
      { label: '角色描述', prop: 'description' },
      // 添加其他表单项
    ]

    // 创建表单数据对象
    const formRoleData = reactive<FormRoleData>({ roleId: '', name: '', description: '' })

    // 为每个属性生成唯一的 ID
    list.forEach(function (item) {
      if (item.prop === 'roleId') {
        formRoleData[item.prop] = generateUniqueId() // 生成唯一的 UUID
      }
      if (item.prop === 'name') {
        formRoleData[item.prop] = ' ' // 其他属性初始化为空字符串
      }
      if (item.prop === 'description') {
        formRoleData[item.prop] = ' ' // 其他属性初始化为空字符串
      }
    })

    // const handleSubmit = () => {
    //   const jsonData = JSON.stringify(formData.value)
    //   // 将 jsonData 发送到服务器
    // }
    const contentTypeOptions: any = computed<Options[]>(() => [
      {
        label: t('超级管理员'),
        value: 'img',
      },
      {
        label: t('普通用户'),
        value: 'horizontalVideo',
      },
      {
        label: t('服务人员'),
        value: 'verticalVideo',
      },
      {
        label: t('服务供应商'),
        value: 'verticalVideo',
      },
    ])
    const filterTypeOptions: any = computed<Options[]>(() => [
      {
        label: t('searchTable.form.filterType.artificial'),
        value: 'artificial',
      },
      {
        label: t('searchTable.form.filterType.rules'),
        value: 'rules',
      },
    ])
    const statusOptions: any = computed<Options[]>(() => [
      {
        label: t('searchTable.form.status.online'),
        value: 'online',
      },
      {
        label: t('searchTable.form.status.offline'),
        value: 'offline',
      },
    ])

    const fetchData = async (params: PolicyParams = { pageCurrent: 1, pageSize: 20 }) => {
      setLoading(true)
      try {
        console.log('data:', queryPolicyList(params))
        const data = await queryPolicyList(params)
        // @ts-ignore
        renderData.value = data.list
        pagination.current = params.pageCurrent
        // @ts-ignore
        pagination.total = data.total
      } catch (err) {
        // you can report use errorHandler or other
        console.log('An error occurred while fetching data：', err)
      } finally {
        setLoading(false)
      }
    }

    const search = () => {
      fetchData({
        ...basePagination,
        ...formModel.value,
      } as unknown as PolicyParams)
    }
    const onPageChange = (pageCurrent: number) => {
      fetchData({ ...basePagination, pageCurrent })
    }

    fetchData()
    const reset = () => {
      formModel.value = generateFormModel()
    }

    const dialogVisible = ref(false)
    const formData = ref({
      name: '',
      age: '',
    })

    const showCreateDialog = () => {
      console.log('点击了新建')
      dialogVisible.value = true
    }

    const handleClose = () => {
      dialogVisible.value = false
    }

    const handleSubmit = () => {
      console.log('1Form submitted:', formRoleData)
      const jsonData = JSON.stringify(formRoleData)
      console.log('2Form submitted:', jsonData)
      try {
        const data = addRole(jsonData)
        // 请求成功后的处理
        console.log('Data added successfully:', data)
      } catch (error) {
        // 请求失败后的处理
        console.error('Failed to add role:', error)
      }
      dialogVisible.value = false
    }

    return {
      list,
      formRoleData,
      loading,
      search,
      onPageChange,
      renderData,
      pagination,
      formModel,
      reset,
      contentTypeOptions,
      filterTypeOptions,
      statusOptions,
      dialogVisible,
      formData,
      showCreateDialog,
      handleClose,
      handleSubmit,
    }
  },
  // data() {
  //   return {
  //     dialogVisible: false, // 弹窗是否可见
  //     formData: { name: '', age: '' }, // 表单数据
  //   }
  // },
  // methods: {
  //   showCreateDialog() {
  //     // 在这个方法中处理弹出新建弹框的逻辑
  //     // 可以使用弹框组件，如Modal，来实现
  //     // 例如：this.$Modal.confirm({...});
  //     console.log('新建弹窗出现')
  //     this.dialogVisible = true
  //   }, // 关闭弹窗
  //   handleClose() {
  //     this.dialogVisible = false
  //   }, // 提交表单
  //   handleSubmit() {
  //     // 在这里处理表单提交逻辑，比如发送请求保存数据等
  //     console.log('Form submitted:', this.formData)
  //     // 提交成功后关闭弹窗
  //     this.dialogVisible = false
  //   },
  // },
})
</script>

<style scoped lang="less">
:deep(.arco-table-th) {
  &:last-child {
    .arco-table-th-item-title {
      margin-left: 16px;
    }
  }
}
</style>
@/api/list_role
