<script setup>
import { ref } from 'vue'
import CardItem from './CardItem.vue'

const cards = ref([
  {
    id: 1,
    title: 'work',
    time: '32hrs',
    lastWeek: '36hrs',
    color: 'light-red-work',
  },
  {
    id: 2,
    title: 'play',
    time: '10hrs',
    lastWeek: '8hrs',
    color: 'soft-blue-play',
  },
  {
    id: 3,
    title: 'study',
    time: '4hrs',
    lastWeek: '36hrs',
    color: 'light-red-study',
  },
  {
    id: 4,
    title: 'exercise',
    time: '4hrs',
    lastWeek: '5hrs',
    color: 'lime-green-exercise',
  },
  {
    id: 5,
    title: 'social',
    time: '5hrs',
    lastWeek: '10hrs',
    color: 'violet-500',
  },
  {
    id: 6,
    title: 'Self Care',
    time: '2hrs',
    lastWeek: '2hrs',
    color: 'soft-orange-self-care',
  },
])
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <CardItem v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>
