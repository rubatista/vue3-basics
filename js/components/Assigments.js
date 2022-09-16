import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default{
  components: {
    AssigmentList,
    AssigmentCreate
  },
  template: `
    <section class="flex gap-8">
      <assigment-list :assignments="filters.inProgress" title="In Progress">
        <assigment-create @add="adiciona"></assigment-create>
      </assigment-list>
      
      <div v-show="showCompleted">
        <assigment-list
          :assignments="filters.completed" 
          title="Completed" 
          can-hide 
          @hide-togle="showCompleted = !showCompleted"
        ></assigment-list>
      </div>
    </section>
  `,
  data(){
    return {
      assignments: [],
      showCompleted: true
    }
  },
  computed: {
    filters(){
      return{
        inProgress: this.assignments.filter(assignment => ! assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      };
    }
  },
  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(assignments => {
        this.assignments = assignments;
      })
  },
  methods: {
    adiciona(qualquernome){
      this.assignments.push({
        name: qualquernome,
        completed: false,
        id: this.assignments.length + 1
      });
    }
  }
}