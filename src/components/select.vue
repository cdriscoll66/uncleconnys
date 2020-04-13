<template>
  <div class="custom-select">
    <label>I wanna hear</label>
    <select @change="setSelected">
      <option v-for="(playlist) in playlists" :key="playlist.id">
        {{ playlist.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    playlists: {
      type: Array,
      required: true,
    }
},
methods: {
	setSelected($event) {
      this.$emit("setPlaylist", $event.target.selectedIndex);
	}
}
}
</script>

<style lang="scss" scoped>
.custom-select {
  select {
    color: inherit;
    text-shadow: none;
    display: inline-block;
    box-sizing: border-box;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    margin: 0em;
    border-width: 0;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0 !important;
    font-family: gelo, serif;
    font-size: 1.4rem;
    border-bottom: 3px solid #2c3e50;
    &:active,
    &:focus {
      outline: none;
    }
  }
  label {
    font-size: 1.4rem;
    padding-right: 4px;
  }
}
</style>
