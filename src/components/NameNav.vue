<template>
  <div class="namenav">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <p>Making mixtapes was a way to steal other's art and give it to people.</p>
    <p>
      I love living in the fantasy that the words and feelings portrayed in
      these mixes can be co-opted for my own selfish uses.
    </p>
    <p>
      None of this is mine, and that is as strong as an argument I can make for
      listening to it.
    </p>
    <p>
      Love,<br />
      Uncle Conny
    </p>
    <Select @setPlaylist="setPlaylist" :playlists="playlists" />
  </div>
</template>

<script>
import Select from "./select.vue";

export default {
  name: "NameNav",
  components: {
    Select,
  },
  props: {
		msg: String,
    playlists: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setPlaylist(id) {
      this.$emit("setPlaylist", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.namenav {
  margin-left: 10px;
  padding: 20px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
