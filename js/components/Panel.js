export default {
  template: `
<div :class="theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50 text-gray-900'" class="p-4 border border-gray-400 rounded-lg">
  <header v-if="$slots.heading">
    <h2 class="font-bold">
      <slot name="heading"></slot>
    </h2>
  </header>
  
    <slot></slot>
  

  <footer v-if="$slots.footer">
    <slot name="footer"></slot>
  </footer>
</div>
`,

  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  }
}