<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import PausePlayButton from "../5-elements/PausePlayButton.svelte";

  const {color2, color1} = playlist[$ctpi].colors;

</script>

<!-- MARKUP ///////////////////////////////////// -->
<div class="interface" style:background-color={color1}
  style:color={color2}
>
  <PausePlayButton />
</div>

<!-- STYLES /////////////////////////////////////// -->
<style>
.interface {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 5px;
}
</style>