<script lang="ts">
  import { activeGame } from '../../store.ts'
  import type { GameObject } from '$lib/widgets/types/GameObject.ts'

  export let size = 48
  export let game: GameObject

  const handleClick = () => {
    activeGame.set(game)
  }
</script>

<li class="flex items-center justify-center rounded-xl w-{size} h-{size} overflow-hidden">
  <button on:click={handleClick} class="w-full h-full">
    <img class="w-full h-full" src={game.thumbnail_url} alt={game.title}>
  </button>
</li>