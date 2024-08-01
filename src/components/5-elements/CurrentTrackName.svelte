<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";

  $: name = playlist[$ctpi].name;
  const {color1, color2T} = playlist[$ctpi].colors;
</script>

<!-- MARKUP /////////////////////////////////////// -->
<div style:background-color={color2T} style:color={color1} class="center"
  style:border-color={color1}
>
  {name}
</div>

<!-- STYLES ///////////////////////////////////// -->
<style>
div {
  height: 10%;
  max-height: 50px;
  border-top-width: var(--bw);
  border-top-style: solid;
  font-family: "Julius Sans One", sans-serif;
  font-size: calc(1rem + 1.7dvh);
  letter-spacing: 0.5vw;
}
</style>