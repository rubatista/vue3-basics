<script setup>
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button class="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded disablled:bg-gray-400"
              :disabled="! team.spotsRemaining"
              @click="$emit('add')"
      >
        Add Member ({{ team.spotsRemaining }} spots left)
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-2xl relative">
        <!-- <img src="/smiley.png" alt="" class=""> -->
        {{ team.name }} team
        <div class="bg-green-500 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-1">{{ team.spots }}</div>
      </h3>
    </div>
  </header>
</template>