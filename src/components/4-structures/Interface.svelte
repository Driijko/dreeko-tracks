<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import { colors } from "../../dynamic/colors";
  import PausePlayButton from "../5-elements/PausePlayButton.svelte";
  import VolumeButton from "../5-elements/VolumeButton.svelte";
  import TimeContainer from "./TimeContainer.svelte";

  const {color2, color1T, color1} = playlist[$ctpi].colors;

</script>

<!-- MARKUP ///////////////////////////////////// -->
<div class="interface" style:background-color={$colors.color1T}
  style:color={$colors.color2} style:border-top-color={$colors.color1}
>
  <PausePlayButton />
  <TimeContainer />
  <VolumeButton />
</div>

<!-- STYLES /////////////////////////////////////// -->
<style>
.interface {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-top-width: var(--bw);
  border-top-style: solid;
  position: relative;
}
</style>