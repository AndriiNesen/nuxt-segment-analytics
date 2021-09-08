import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

export default function (context, inject) {
  const options = <%= JSON.stringify(options) %>
  const defaultCdn = 'https://cdn.segment.com'

  if (options.disabled) {
    const stub = () => {};

    const segmentStub = {
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

    inject('segment', segmentStub);
    return;
  };

  const router = options.useRouter && context.app ? context.app.router : undefined
  const cdnHost = options.cdnHost ? options.cdnHost : defaultCdn

  Vue.use(VueSegmentAnalytics, {
    id: options.id,
    router: router,
    pageCategory: options.pageCategory,
    cdnHost: cdnHosts
  })


  if (Vue.$segment) {
    inject('segment', Vue.$segment)
  }
}
