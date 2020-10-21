import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

export default function (context, inject) {
  const options = <%= JSON.stringify(options) %>

  if (options.disabled) return;

  const router = options.useRouter && context.app ? context.app.router : undefined
  Vue.use(VueSegmentAnalytics, {
    id: options.id,
    router: router,
    pageCategory: options.pageCategory,
  })

  if (context.store) {
    context.store.$segment = Vue.$segment
  }

  context.$segment = Vue.$segment

  if (Vue.$segment) {
    inject('segment', Vue.$segment)
  }
}
