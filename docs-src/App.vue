<template>
  <div id="app">
    <div class="page-header">
      <h1>vue imgzoomer</h1>
      <div style="width: 400px">
        <v-imgzoomer :url="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrl: 'http://imgsrc.baidu.com/imgad/pic/item/3801213fb80e7beca9004ec5252eb9389b506b38.jpg'
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>

</style>
  