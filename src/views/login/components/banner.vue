<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" animation-name="fade">
        <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import bannerImage from '@/assets/images/login-banner.png'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const carouselItem = computed(() => [
      {
        slogan: t('安享晚年，岁月静好'),
        subSlogan: t('login.banner.subSlogan1'),
        image: bannerImage,
      },
      {
        slogan: t('心怀感恩，幸福绵长'),
        subSlogan: t('login.banner.subSlogan2'),
        image: bannerImage,
      },
      {
        slogan: t('享受生命的温暖，心中常有希望'),
        subSlogan: t('login.banner.subSlogan3'),
        image: bannerImage,
      },
    ])
    return {
      carouselItem,
    }
  },
})
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &-inner {
    flex: 1;
    height: 100%;
  }
}

.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &-title {
    color: var(--color-fill-1);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &-sub-title {
    margin-top: 8px;
    color: var(--color-text-3);
    font-size: 14px;
    line-height: 22px;
  }

  &-image {
    width: 320px;
    margin-top: 30px;
  }
}
</style>
