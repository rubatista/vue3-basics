<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useFlash } from "../composables/useFlash";
import { ref } from "vue";
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food');
let { flash } = useFlash();
</script>

<template>
    <main>
        <p>
            what is your favorite food? <input type="text" v-model="food">
        </p>
        <p>
            <button @click="flash('hello')">click here</button>
        </p>
        <TheWelcome />
    </main>
</template>
