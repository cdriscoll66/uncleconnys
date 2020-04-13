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
    <Infobox />
  </div>
</template>

<script>
import NameNav from "./components/NameNav.vue";
import Infobox from "./components/InfoBox.vue";

export default {
  name: "App",
  components: {
	NameNav,
	Infobox
  },
  data() {
    return {
      isPlaying: false,
      currentList: "0",
      currentTrack: 0,
      playlists: [
        {
          bgImg: require("./assets/images/home-bg.jpg"),
		},
		{
          id: "bruce_springsteen",
          title: "Bruce Springsteen",
          bgImg: require("./assets/images/bruce-springsteen.jpg"),
          tracks: "bruce-springsteen.json"
        },
        {
          id: "mariah_carey",
          bgImg: require("./assets/images/mariah-carey.jpg"),
          title: "Mariah Carey"
        },
        {
          id: "andrew_mcmahon",
          bgImg: require("./assets/images/andrew-mcmahon.jpg"),
          title: "Andrew McMahon"
        }
      ]
    };
  },
  methods: {
    setPlaylist(id) {
      this.currentList = id;
    }
  }
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
