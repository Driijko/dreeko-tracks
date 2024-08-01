<!-- SCRIPTS ///////////////////////////////////////// -->
 <script>
  import { colors } from "../../dynamic/colors";
  import Logo from "../5-elements/Logo.svelte";
  import Playlist from "../4-structures/Playlist.svelte";
  import CurrentTrackName from "../5-elements/CurrentTrackName.svelte";
  import Interface from "../4-structures/Interface.svelte";

 </script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="playlist-layer vp-layer">
  <div class="playlist-content-container"
    style:border-color={$colors.color1}
  >
    <Logo />
    <Playlist />
    <CurrentTrackName />
    <Interface />
  </div>
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
/* PORTRAIT -------------------------------------- */
@media screen and (orientation: portrait) {
  .playlist-layer {
    display: flex;
    justify-content: center;
  }
  .playlist-content-container {
    border-width: var(--bw);
    border-style: solid;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }
}

</style>
