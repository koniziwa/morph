<script lang='ts'>
  import { onMount } from 'svelte'
  import { activeGame } from '../../store.ts'
  import GameCard from '$lib/shared/GameCard.svelte'
  import type { GameObject } from './types/GameObject.ts'
  import getTodayLaunchedGames from './helpers/getTodayLaunchedGames.ts'
  import fetchGameData from './api/fetchGameData.ts'

  export let username: string
  let gameData: GameObject[] = []
  let todayLaunchedGames: GameObject[] = []
  let active: GameObject

  activeGame.subscribe(value => active = value)
  
  onMount(() => {
    fetchGameData(username).then((data: GameObject[]) => {
      gameData = data
      todayLaunchedGames = getTodayLaunchedGames(data)
    })
  })
</script>

<div class="relative z-10 mt-64 ml-16 flex gap-x-24">
  <div class="flex flex-col gap-y-4">
    <p class="text-white font-medium text-2xl">Today</p>
    <ul class="flex gap-x-2">
      {#each todayLaunchedGames as game}
      <GameCard size={48} {game} />
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-y-4">
    <p class="text-white font-medium text-2xl">Resume</p>
      <div class="flex items-center justify-center border-4 border-white rounded-xl w-64 h-64">
        <div class="flex items-center justify-center rounded-xl w-60 h-60 overflow-hidden">
          <img class="w-full h-full" src={active.thumbnail_url} alt={active.title} />
        </div>
      </div>
  </div>

  <div class="flex flex-col gap-y-4">
    <p class="text-white font-medium text-2xl">Favorites</p>
    <ul class="flex gap-x-2">
      {#each gameData as game}
      <GameCard size={40} {game} />
      {/each}
    </ul>
  </div>

</div>