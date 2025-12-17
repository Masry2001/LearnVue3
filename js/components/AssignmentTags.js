export default {

  template: `
      <div class="mb-4 flex gap-2">
        <button 
        v-for="tag in tags" 
        :key="tag" 
        class="bg-gray-600 text-white text-xs px-2 py-1 rounded" @click="$emit('update:modelValue', tag)"
        :class="{
        'border border-gray-100 px-3 py-2': tag === modelValue,
        }"
        >{{ tag }}</button>
      </div>
`,

  props: {
    initialTags: {
      type: Array,
      required: true
    },

    modelValue: {
      type: String,
      required: true
    }
  },


  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },

}