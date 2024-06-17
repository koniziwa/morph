import type { GameObject } from '$lib/widgets/types/GameObject'
import { writable } from 'svelte/store'

export const activeGame = writable<GameObject>({
  title: '',
  time_played: 0,
  user_achievements: 0,
  max_achievements: 0,
  thumbnail_url: '',
  background_url: '',
  last_played: '',
})
