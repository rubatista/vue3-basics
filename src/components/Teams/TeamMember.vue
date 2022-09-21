
<script setup>
  defineProps({
    name: String,
    email: String,
    status: String
  })
  </script>
<template>
  <tr class="bg-gray-100 dark:bg-zinc-900 px-12">
    <td class="text-xl font-medium flex items-center gap-x-4 px-3 py-2 border border-green-900 rounded-xl">
      <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="" class="rounded-xl">
      {{ name }}
    </td>

    <td class="text-gray-500 px-3 py-2 border border-green-900 rounded-xl">{{ email }}</td>

    <td class="px-3 py-2 border border-green-900 rounded-xl">
      <button class="text-green-500 text-xl">{{ status }}</button>
    </td>
  </tr>
</template>
