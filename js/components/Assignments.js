
import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {

  components: {
    AssignmentList,
    AssignmentCreate
  },

  template: `

    <AssignmentList 
    :assignments="filters.inProgressAssignments" 
    title="In Progress" />

    <AssignmentList 
    :assignments="filters.completedAssignments" 
    title="Completed" />

    <AssignmentCreate @addAssignment="addAssignment"/>


`,
  data() {
    return {
      assignmentsArray: [
        { name: 'Assignment 1', completed: false, id: 1 },
        { name: 'Assignment 2', completed: false, id: 2 },
        { name: 'Assignment 3', completed: false, id: 3 },
      ],

    }
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
    addAssignment(name) {
      this.assignmentsArray.push({ name: name, completed: false, id: this.assignmentsArray.length + 1 });
    }
  }
}