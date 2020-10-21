import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

export default function (context, inject) {
  const options = <%= JSON.stringify(options) %>

  if (options.disabled) {
    const stub = () => {};

    const segmentStub = {c
      identify: stub,
      track: stub,
      trackLink: stub,
      trackForm: stub,
      page: stub,
      group: stub,
      alias: stub,
      ready: stub,
      debug: stub,
      on: stub,
      load: stub,
      timeout: stub,
      reset: stub,
    }

    context.$segment = segmentStub;
    context.store.$segment = segmentStub;
    inject('segment', segmentStub);
  };

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
