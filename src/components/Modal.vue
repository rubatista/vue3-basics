<script setup>
  defineProps({
    show: Boolean
  });
</script>

<template>
  <transition
    enter-from-class="opacity-0 scale-150"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="tansition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125">
    <div v-if="show" class="fixed inset-0 grid place-items-center bg-gradient-to-br from-zinc-900/30 to-green-900/30">
      <div class="w-[80vw] bg-white p-4 text-gray-900 max-w-[500px] rounded border border-xl">
        <header>
          <slot name="header"></slot>
        </header>
        <div>
          <slot name="body">
          </slot>
        </div>
        <footer class="border-t-2 mt-4 pt-2 text-xs grid place-items-end">
            <button @click="$emit('close')" class="bg-gray-200 hover:bg-green-700 hover:text-white px-4 py-1 rounded border border-green-500 hover:border-green-700">Close</button>
        </footer>
      </div>
    </div>
  </transition>
</template>