<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div @click="goHome" title="Go home" class="left" style="cursor:pointer">
        <span class="iconfont icon">&#xe617;</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  display: flex;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
      .icon-cart {
        font-size: px2rem(22);
      }
    }
  }
}
</style>
