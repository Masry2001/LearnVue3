
export default {

  template: `

        <li :key="assignment.id">
          <label>
            <input type="checkbox" v-model="assignment.completed">
            {{ assignment.name }}
          </label>
        </li>

`,

  props: {
    assignment: {
      type: Object,
      required: true
    }
  }

}