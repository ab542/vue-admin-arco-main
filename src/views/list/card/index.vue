<template>
  <div class="container">
    <Breadcrumb :items="['menu.product_classification.list', 'menu.list.cardList']" />
    <!-- <Breadcrumb :items="breadcrumbItems" /> -->
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.list.cardList')">
          <a-row justify="space-between">
            <a-col :span="24">
              <a-tabs :default-active-tab="1" type="rounded">
                <a-tab-pane key="1" :title="$t('cardList.tab.title.all')">
                  <QualityInspection />
                  <TheService />
                  <RulesPreset />
                </a-tab-pane>
                <a-tab-pane key="2" :title="$t('cardList.tab.title.content')">
                  <QualityInspection />
                </a-tab-pane>
                <a-tab-pane key="3" :title="$t('cardList.tab.title.service')">
                  <TheService />
                </a-tab-pane>
                <a-tab-pane key="4" :title="$t('cardList.tab.title.preset')">
                  <RulesPreset />
                </a-tab-pane>
              </a-tabs>
            </a-col>
            <a-input-search
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="width: 240px; position: absolute; top: 60px; right: 20px"
            />
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QualityInspection from './components/quality-inspection.vue'
import RulesPreset from './components/reules-preset.vue'
import TheService from './components/the-service.vue'

export default defineComponent({
  components: {
    QualityInspection,
    TheService,
    RulesPreset,
  },
})
</script>

<style scoped lang="less">
.container {
  :deep(.arco-list-content) {
    overflow-x: hidden;
  }

  :deep(.arco-card-meta-title) {
    font-size: 14px;
  }
}
:deep(.arco-list-col) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

:deep(.arco-list-item) {
  width: 33%;
}

:deep(.block-title) {
  margin: 0 0 12px 0;
  font-size: 14px;
}
:deep(.list-wrap) {
  // min-height: 140px;
  .list-row {
    align-items: stretch;
    .list-col {
      margin-bottom: 16px;
    }
  }
  :deep(.arco-space) {
    width: 100%;
    .arco-space-item {
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>
