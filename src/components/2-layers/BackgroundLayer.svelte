<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { ctpi } from "../../dynamic/audio.js";
  import FlippableBackground from "../5-elements/FlippableBackground.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $ctpi === 0}
  <FlippableBackground picNum="0" duration={60} />
{:else if $ctpi === 1}
  <FlippableBackground picNum="1" duration={40} />
{/if}