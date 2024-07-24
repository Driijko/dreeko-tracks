<!-- SCRIPTS ///////////////////////////////////////// -->
 <script>
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import Logo from "../5-elements/Logo.svelte";

  const { primary, secondary } = playlist[$ctpi].colors;

 </script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="playlist-layer vp-layer">
  <div class="playlist-container"
    style:border-color={primary}
    style:background-color={secondary}
  >
    <Logo />
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
  .playlist-container {
    border-width: var(--bw);
    border-style: solid;
    width: 100%;
    max-width: 500px;
  }
}

</style>
