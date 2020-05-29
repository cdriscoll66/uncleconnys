<template>
  <div
    id="app"
    :style="{ backgroundImage: `url( ${playlists[currentList].bgImg})` }"
  >
    <NameNav
      @setPlaylist="setPlaylist"
      :playlists="playlists"
      msg="Uncle Conny's Mixtape"
    />
    <Infobox :currentListName="currentListName" />
    <Audio :currentPreview="currentPreview" />
  </div>
</template>

<script>
import NameNav from "./components/NameNav.vue";
import Infobox from "./components/InfoBox.vue";
import Audio from "./components/Audio.vue";

import json from "./assets/playlists/bruce_springsteen.json";

export default {
  name: "App",
  components: {
    NameNav,
    Infobox,
    Audio,
  },
  data() {
    return {
      isPlaying: false,
      currentTrack: 4,
      currentPreview: json.playlist[4].preview,
      currentList: "0",
      currentListName: json.artist,
      playlists: [
        {
          bgImg: require("./assets/images/home-bg.jpg"),
        },
        {
          id: "bruce_springsteen",
          title: "Bruce Springsteen",
          bgImg: require("./assets/images/bruce-springsteen.jpg"),
          tracks: "bruce-springsteen.json",
        },
        {
          id: "mariah_carey",
          bgImg: require("./assets/images/mariah-carey.jpg"),
          title: "Mariah Carey",
        },
        {
          id: "andrew_mcmahon",
          bgImg: require("./assets/images/andrew-mcmahon.jpg"),
          title: "Andrew McMahon",
        },
      ],
    };
  },
  methods: {
    setPlaylist(id) {
      this.currentList = id;
      this.currentTrackName = this.playlists[id].title;
      this.currentTrack = 0;
    },
    songChange() {

			//This will be the controller to change the song. it now changes to current track which is a prop
      this.currentPreview = json.playlist[this.currentTrack].preview;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  overflow: hidden;
  font-family: gelo, serif;
  color: #2c3e50;
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
