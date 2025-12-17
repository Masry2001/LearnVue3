
import AssignmentListItem from './AssignmentListItem.js';
import AssignmentTags from './AssignmentTags.js';
import Panel from './Panel.js';
export default {

  components: {
    AssignmentListItem,
    AssignmentTags,
    Panel
  },

  template: `
    <Panel v-if="show && assignments.length" class="mb-4 w-80">

      <div class="flex justify-between items-start">
        <h2 class="text-2xl font-bold mb-4">
          {{ title }}
          <span class="text-gray-400">({{ assignments.length }})</span>
        </h2>
        <button v-if="canToggle" @click="show = false">&times;</button>
      </div>

      <AssignmentTags 
      :initialTags="initialTags"
      v-model:modelValue="currentTag"
      />
        

      <ul class="border border-gray-600 p-4 divide-y divide-gray-600">
        <AssignmentListItem v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
      </ul>

      <slot></slot>
    </Panel>
`,

  props: {
    assignments: {
      type: Array,
      required: true
    },

    canToggle: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      required: true
    }
  },

  computed: {
    initialTags() {
      return this.assignments.map(assignment => assignment.tag);
    },

    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(assignment => assignment.tag === this.currentTag);
    }
  },

  data() {
    return {
      currentTag: 'all',
      show: true,
    }
  },



}