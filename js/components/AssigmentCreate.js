export default{
  template: `
    <form @submit.prevent="add">
      <div class="grid grid-cols-5 border border-gray-600 flex mt-4 rounded">
        <input v-model="newAssignment" placeholder="New Assignments..." class="rounded-l col-span-4 bg-gray-800 text-sm text-white placeholder-white p-2">
        <button type="submit" class="col-span-1 bg-white text-gray-800 p-2 text-sm rounded-r">Add</button>
      </div>
    </form>
  `,
  data(){
    return{
        newAssignment: ''
    }
  },
  methods: {
    add(){
      this.$emit('add', this.newAssignment);

      this.newAssignment ='';
    }
  }
}