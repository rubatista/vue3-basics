export default{
  template: `
    <div class="flex gap-2">
      <button 
        @click="$emit('update:currentTag', tag)"
        v-for="tag in tags" 
        class="border rounded px-1 py-px text-xs border-gray-600"
        :class="{
          'border-blue-400 text-blue-400': tag == currentTag
        }"
      >
        {{ tag }}
      </button>
    </div>
  `,
  props:{
    initialTags: Array,
    currentTag: String
  },
  computed:{
    tags(){
      return ['all', ...new Set(this.initialTags)] ;
    }
  }
}