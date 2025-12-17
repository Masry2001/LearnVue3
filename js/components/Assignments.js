
import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {

  components: {
    AssignmentList,
    AssignmentCreate
  },

  template: `
    <section class="flex gap-8">
        <AssignmentList 
        :assignments="filters.inProgressAssignments" 
        title="In Progress">

            <AssignmentCreate @addAssignment="addAssignment"/>

        </AssignmentList>

        <AssignmentList 
        :assignments="filters.completedAssignments" 
        title="Completed" :canToggle="true" />

        </section>
`,

  data() {
    return {
      assignmentsArray: []
    }
  },

  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(data => {
        this.assignmentsArray = data;
      });
  },

  computed: {

    filters() {
      return {

        inProgressAssignments: this.assignmentsArray.filter(assignment => !assignment.completed),

        completedAssignments: this.assignmentsArray.filter(assignment => assignment.completed)

      }
    },

  },

  methods: {
    addAssignment(name, tag) {
      this.assignmentsArray.push({ name: name, completed: false, id: this.assignmentsArray.length + 1, tag: tag });
    }
  }
}