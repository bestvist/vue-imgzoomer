<template>
  <div id="app">
    <div class="page-header">
      <h1>vue imgzoomer</h1>
      <v-imgzoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                thumbs: [
                    {
                        id: 1,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/1.jpeg"
                    },
                    {
                        id: 2,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/2.jpeg"
                    },
                    {
                        id: 3,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/3.jpeg"
                    },
                    {
                        id: 4,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/4.jpeg"
                    },
                    {
                        id: 5,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/5.jpeg"
                    },
                    {
                        id: 6,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/6.jpeg"
                    },
                    {
                        id: 7,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/7.jpeg"
                    },
                    {
                        id: 8,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/8.jpeg"
                    },
                    {
                        id: 9,
                        url:
                            "http://yoohooworld.com/images/vue_product_zoomer/thumbs/9.jpeg"
                    }
                ]
            },
            zoomerOptions: {
                zoomFactor: 3,
                pane: "pane",
                hoverDelay: 300,
                namespace: "zoomer",
                move_by_click: false,
                scroll_items: 7,
                choosed_thumb_border_color: "#dd2c00"
            }
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
  