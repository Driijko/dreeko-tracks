<!-- SCRIPTS ////////////////////////////////// -->
 <script>
  // IMPORTS --------------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";

  const {color1, color2T} = playlist[$ctpi].colors;

 </script>

<!-- MARKUP //////////////////////////////////////// -->
<h1 class="center" style:color={color1}
 style:background-color={color2T}
>
  DREEKO TRACKS
</h1>

<!-- STYLES //////////////////////////////////// -->
<style>
h1 {
  padding-top: 2%;
  border-bottom-width: var(--bw);
  border-bottom-style: solid;
  height: 10%;
  max-height: 100px;
  font-family: Playwrite FR Trad, cursive;
  word-spacing: 3vw;
  font-size: calc(1rem + 0.1dvh);
  letter-spacing: 0.4vw;
}
</style>

