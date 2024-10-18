<script setup>
import { useUrl } from '@/uses/useUrl'

const imgUrl = useUrl('image-jeremy.png')
</script>

<template>
  <div
    class="flex flex-col max-w-[250px] bg-dark-blue rounded-xl"
  >
    <div class="bg-violet-700 px-8 rounded-md pt-6 pb-16">
      <img class="w-16 border-2 mb-6 rounded-full" :src="imgUrl" alt="" />
      <p class="text-xs text-gray-400">Report for</p>
      <p class="text-4xl mt-2">Jeremy Robson</p>
    </div>
    <div class="p-8 rounded-b-xl">
      <ul class="flex flex-col gap-3">
        <li class="cursor-pointer">Daily</li>
        <li class="cursor-pointer">Weekly</li>
        <li class="cursor-pointer">Monthly</li>
      </ul>
    </div>
  </div>
</template>
