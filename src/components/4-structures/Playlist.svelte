<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import playlist from "../../static/playlist";
  import { colors } from "../../dynamic/colors";
  import TrackListItem from "../5-elements/TrackListItem.svelte";

</script>

<!-- MARKUP ////////////////////////////////// -->
<ul class="playlist-container"
  style:background-color={window.innerWidth > 500 ? $colors.color2T2 : "transparent"}
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