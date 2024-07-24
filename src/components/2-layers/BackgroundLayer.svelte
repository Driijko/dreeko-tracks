<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { ctpi } from "../../dynamic/audio.js";
  import FlippableBackground from "../5-elements/FlippableBackground.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $ctpi === 0}
  <FlippableBackground picNum="0" duration={60} />
{/if}