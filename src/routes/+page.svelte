<script>
  import Clock from '$lib/shared/Clock.svelte'
  import GameSlider from '$lib/widgets/GameSlider.svelte'
</script>

<header class="absolute t-0 l-0 w-full px-16 py-8 z-20 flex-row flex justify-between">
  <div class="flex items-center gap-x-4">
    <div class="flex w-20 h-20 border-4 border-lime-300 rounded-full items-center justify-center">
      <div class="overflow-hidden rounded-full w-16 h-16">
        <img class="w-full h-full" src="./images/killua.jpg" alt="Profile" />
      </div>
    </div>
    <div class="flex flex-col">
      <p class="text-xl font-medium text-white">koniziwa</p>
      <p class="text-gray-300">96 lvl</p>
    </div>
  </div>
  <nav class="flex items-center justify-center">
    <ul class="flex items-center gap-x-8">
      <li class="text-white font-medium text-lg">My Space</li>
      <li class="text-gray-400 font-medium text-lg">Music</li>
      <li class="text-gray-400 font-medium text-lg">Movies</li>
    </ul>
  </nav>
  <Clock />
</header>

<main class="absolute t-0 l-0 w-full h-full">
  <div class="absolute t-0 l-0 z-10 w-full h-full bg-gradient-to-r from-black via-transparent via-70% to-black to-95% opacity-70"></div>
  <img class="absolute t-0 l-0 z-0 w-full h-full" src="./images/tlou-bg.jpg" alt="Background">
  <GameSlider username="koniziwa" />
</main>