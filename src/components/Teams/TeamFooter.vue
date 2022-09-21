<script setup>
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
</script>

<template>
  <footer class="mt-12 bg-gray-100 dark:bg-zinc-800 py-5 text-center rounded">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>