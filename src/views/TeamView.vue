<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembersList from '@/components/Teams/TeamMembersList.vue';
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import { useTeamStore } from '@/stores/TeamStore';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';


let team = useTeamStore();

team.fill();

let showModal = ref(false);
</script>

<template>
  
  <TeamHeader @add="showModal = true"/>

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembersList />
  </div>

  <TeamFooter />

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <p class="text-lg text-green-800 grid place-items-center font-medium uppercase" >Need to add a new member to your team?</p>
      </template>
      <template #body>
        <form class="mt-6">
          <div class="flex gap-3">
            <input type="email" placeholder="Email Adress.." class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>

</template>