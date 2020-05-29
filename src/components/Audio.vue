<template>
  <div class="audio">
    <audio autoplay>
      <source :src="this.currentPreview" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: "Audio",
  props: {
    currentPreview: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
