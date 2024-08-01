<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import { colors } from "../../dynamic/colors";

  $: name = playlist[$ctpi].name;

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div style:background-color={$colors.color2T} style:color={$colors.color1} class="center"
  style:border-color={$colors.color1}
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