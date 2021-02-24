import DefaultTheme from 'vitepress/dist/client/theme-default'
import Test from '../components/xstate-component.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Test', Test)
  }
}
