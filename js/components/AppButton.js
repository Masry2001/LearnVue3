
export default {

   props: {
      type: {
         type: String,
         default: 'primary',
      },
      processing: {
         type: Boolean,
         default: false,
      }
   },


   template: `
          <button 
            :class="{
            'px-4 py-2 rounded disabled:cursor-not-allowed': true,
            'bg-blue-500 hover:bg-blue-600 text-white': type === 'primary',
            'bg-gray-500 hover:bg-gray-600 text-white': type === 'secondary',
            'is-loading': processing
            }"
            :disabled="processing">
             <slot></slot>
          </button>
          `,


}