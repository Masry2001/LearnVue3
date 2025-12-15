
import AssignmentList from './AssignmentList.js';
export default {

  components: {
    AssignmentList
  },

  template: `

 <AssignmentList 
 :assignments="filters.inProgressAssignments" 
 title="In Progress" />
 
 <AssignmentList 
 :assignments="filters.completedAssignments" 
 title="Completed" />

`,
  data() {
    return {
      assignmentsArray: [
        { name: 'Assignment 1', completed: false, id: 1 },
        { name: 'Assignment 2', completed: false, id: 2 },
        { name: 'Assignment 3', completed: false, id: 3 },
      ]
    }
  },

  computed: {

    filters() {
      return {

        inProgressAssignments: this.assignmentsArray.filter(assignment => !assignment.completed),

        completedAssignments: this.assignmentsArray.filter(assignment => assignment.completed)

      }
    },

  }
}