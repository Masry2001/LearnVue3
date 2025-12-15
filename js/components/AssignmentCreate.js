export default {

  template: `
    <form @submit.prevent="addAssignment">
      <div class="border border-gray-600 p-4 text-black">
        <input v-model="newAssignment" name="assignmentName" type="text" placeholder="Add Assignment" class="p-2 border border-gray-600" />
        <button type="submit" class="bg-white border-l p-2 ">Add</button>
      </div>
    </form>
`,


  data() {
    return {
      newAssignment: ''
    }
  },

  methods: {
    addAssignment() {
      this.$emit('addAssignment', this.newAssignment);
      this.newAssignment = '';
    }
  },
}