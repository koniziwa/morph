<script>
  import Header from '$lib/widgets/Header.svelte'
  import GameSlider from '$lib/widgets/GameSlider.svelte'
  import GameBackground from '$lib/shared/GameBackground.svelte'
</script>

<Header />

<main class="absolute t-0 l-0 w-full h-full">
  <GameBackground />
  <GameSlider username="koniziwa" />
</main>