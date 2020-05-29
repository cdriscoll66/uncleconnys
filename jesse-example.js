import axios from 'axios';
export default {
    data() {
    return {
        currentArtist: 'bob-dylan',
        songs: []
    }
  },
  watch: {
    currentArtist() {
        axios.get('/path/to/json/' + this.currentArtist + '.json').then((resp) => {
        this.songs = resp.data;
      });
    }
  }

}
