
import AssignmentListItem from './AssignmentListItem.js';
export default {

  components: {
    AssignmentListItem
  },

  template: `
 <section v-if="assignments.length" class="mb-4">

      <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>

      <ul class="border border-gray-600 p-4 divide-y divide-gray-600">
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