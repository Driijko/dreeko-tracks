<script>
  import viewportSetup from "./scripts/viewport/viewportSetup";
  import LoadingLayer from "./components/2-layers/LoadingLayer.svelte";
  import BackgroundLayer from "./components/2-layers/BackgroundLayer.svelte";
  import PlaylistLayer from "./components/2-layers/PlaylistLayer.svelte";

  viewportSetup();
</script>

<main>
  <BackgroundLayer />
  <PlaylistLayer />
  <LoadingLayer />
</main>

  <!-- <div id="logo">
    DREEKO<br/> TRACKS
  </div> -->

<style>
main {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
}
/* main {
  width: 100%;
  height: 100%;
  position: relative;
}
#logo {
  padding-top: 250px;
  border: 1px solid hsl(170, 100%, 0%);
  position: absolute;
  left: 0;
  top: 0;
  width: 1201px;
  height: 631px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
    180deg,
    hsl(170, 100%, 50%) 15%,
    hsl(170, 100%, 100%)
  );
  color: hsl(50, 100%, 40%);
  font-family: "Playwrite FR Trad", cursive;
  font-size: 70px;
  line-height: 2.5;
} */
</style>
