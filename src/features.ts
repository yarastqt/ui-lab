export const BUTTON_NEW_LAYOUT = {
  release: '3.0.0',
  component: 'Button',
  value: 'BUTTON_NEW_LAYOUT',
  description: 'Новая верстка кнопки.',
}

export function isFeatureEnabled(_feature: { value: string; description: string }, component: any): boolean {
  return false
}
