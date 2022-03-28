<template>
  <i-page>
    <div class="main">
      <input class="input" v-model.number="num" />
      <button @click="log">输出log</button>
    </div>
  </i-page>
</template>

<script setup lang="ts">
  let num = ref(0);

  function log() {
    console.log(typeof num.value);
    console.log('num:', num.value);
  }
</script>

<style>
  .main {
    padding: 20rpx;
  }
  .input {
    margin: 50rpx 0;
    width: 90%;
    height: 80rpx;
    color: #b2b2b2;
    font-size: 26rpx;
    line-height: 80rpx;
    background: #f8f7fa;
    border-radius: 8rpx;
  }
</style>
