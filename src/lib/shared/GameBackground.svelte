<script lang="ts">
  import type { GameObject } from '$lib/widgets/types/GameObject.ts'
  import { fade } from 'svelte/transition'
  import { activeGame } from '../../store.ts'

  let game: GameObject

  activeGame.subscribe(value => game = value)
</script>

<div class="absolute t-0 l-0 z-10 w-full h-full bg-gradient-to-r from-black via-black via-70% to-black to-95% opacity-70"></div>
<img class="absolute t-0 l-0 z-0 w-full h-full" src={game.background_url} alt="Background">