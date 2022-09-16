import Assigment from "./Assigment.js"
import AssigmentTags from "./AssigmentTags.js";
export default{
  components: {
    Assigment,
    AssigmentTags
  },
  template: `
    <section v-show="assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
    <div class="flex justify-between items-start">  
      <h2 class="font-bold mb-2">
        {{ title }} <span>({{assignments.length}})</span>
      </h2>

      <button 
        v-show="canHide" 
        @click="$emit('hideTogle')"
      >
        &times
      </button>
    </div>
      
      <assigment-tags 
          v-model:currentTag="currentTag"
          :initial-tags="assignments.map(a => a.tag)"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-4 rounded">
        <assigment 
          v-for="assignment in filteredAssignments" 
          :key="assignment.id"
          :assignment="assignment"  
        ></assigment>
      </ul>

      <slot></slot>
    </section>
    `,
    props: {
      assignments: Array,
      title: String,
      canHide: {type: Boolean, default: false}
    },
    data(){
      return{
        currentTag:'all'
      }
    },
    computed: {
      filteredAssignments(){
        if(this.currentTag === 'all'){
          return this.assignments;
        }
        return this.assignments.filter(a => a.tag === this.currentTag);
      }
    }
}