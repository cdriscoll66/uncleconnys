<template>
  <div class="infobox">
    <h1>{{ currentListName }}</h1>
  </div>
</template>

<script>
export default {
  name: "Infobox",
  props: {
    currentListName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.infobox {
  h1 {
    color: red;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
