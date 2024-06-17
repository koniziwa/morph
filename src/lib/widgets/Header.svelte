<script lang="ts">
  import Clock from '$lib/shared/Clock.svelte'
  import { documentDir } from '@tauri-apps/api/path'
  import { convertFileSrc } from '@tauri-apps/api/tauri'
  import { onMount } from 'svelte'

  let user_avatar: string

  onMount(() => {
    const fetchUserAvatarUrl = async () => {
      const documentDirPath = await documentDir()
      user_avatar = convertFileSrc(documentDirPath + 'MorphData/avatars/' + 'koniziwa.jpg')
    }

    fetchUserAvatarUrl()
  })
  
</script>

<header class="absolute t-0 l-0 w-full px-16 py-8 z-20 flex-row flex justify-between">
  <div class="flex items-center gap-x-4">
    <div class="flex w-20 h-20 border-4 border-lime-300 rounded-full items-center justify-center">
      <div class="overflow-hidden rounded-full w-16 h-16">
        <img class="w-full h-full" src={user_avatar} alt="Profile" />
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