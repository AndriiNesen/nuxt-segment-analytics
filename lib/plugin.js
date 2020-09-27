import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

export default function (context) {
  const options = <%= JSON.stringify(options) %>
  const router = options.useRouter && context.app ? context.app.router : undefined
  Vue.use(VueSegmentAnalytics, {
    id: options.id,
    router: router
  })

  if (store) {
    store.$segment = Vue.$segment
  }

  context.$segment = Vue.$segment

  if (Vue.$segment) {
    inject('segment', Vue.$segment)
  }
}
