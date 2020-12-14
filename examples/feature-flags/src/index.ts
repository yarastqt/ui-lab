import { isFeatureEnabled } from './feature-flags'

if (isFeatureEnabled('')) {
  console.log('hello')
}
