<script setup>
import { useUrl } from '@/uses/useUrl'

const { card } = defineProps({
  card: {
    type: Object,
    required: true,
  },
})
console.log(card.color)
</script>

<template>
  <div
  :class="card.color ? `bg-${card.color}` : 'bg-light-red-work'"
    class="  rounded-xl " :key="card.id"
   
  >
    <div class="bg-dark-blue h-full mt-12 px-8 pt-8 rounded-xl">
      <div class="flex justify-between items-center">
        <p>{{ card.title }}</p>
        <img :src="useUrl('icon-ellipsis.svg')" alt="menu Icon" />
      </div>
      <p class="text-6xl mt-5">{{ card.time }}</p>
      <p class=""> Last week - {{ card.lastWeek }}</p>

    </div>
  </div>
</template>
