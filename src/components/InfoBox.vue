<template>
  <div class="infobox">
    <div v-if="myJson">{{ myJson }}</div>
  </div>
</template>

<script>
import json from "../assets/playlists/bruce_springsteen.json";

export default {
  name: "Infobox",
  props: {},
  data() {
    return {
      myJson: json
    };
  }
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
