<script>
  import { onMount } from 'svelte'
  import formatTime from './helpers/formatTime'

  let time = new Date()

  $: timeInformation = formatTime(time.getHours(), time.getMinutes())

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<div class="flex items-center justify-center">
  <div class="flex items-begin gap-x-1">
    <p class="text-white font-medium text-3xl">{timeInformation.time}</p>
    <p class="text-white text-md">{timeInformation.postfix}</p>
  </div>
</div>
