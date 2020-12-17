import { isFeatureEnabled } from "./feature-flags.ts"


if (isFeatureEnabled({ value: 'FEATURE_1', component: 'Button' })) {
  console.log('FEATURE_1_CODE')
}

if (isFeatureEnabled({ value: 'FEATURE_2', component: 'Button' })) {
  console.log('FEATURE_2_CODE')
}
