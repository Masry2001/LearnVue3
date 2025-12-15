
import AssignmentListItem from './AssignmentListItem.js';
export default {

  components: {
    AssignmentListItem
  },

  template: `
 <section v-if="assignments.length" class="mb-4">

      <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>

      <ul>
        <AssignmentListItem v-for="assignment in assignments" :assignment="assignment" />
      </ul>

    </section>
`,

  props: {
    assignments: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },


}