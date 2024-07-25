<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import TrackListItem from "../5-elements/TrackListItem.svelte";


  const {color2T2} = playlist[$ctpi].colors;
</script>

<!-- MARKUP ////////////////////////////////// -->
<ul class="playlist-container"
  style:background-color={window.innerWidth > 500 ? color2T2 : "transparent"}
>
  {#each playlist as track,i}
    <TrackListItem number={i} />
  {/each}
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
ul {
  flex: 1;
  flex-direction: column;
  padding: 5px;
}
</style>