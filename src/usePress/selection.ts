type State = 'default' | 'disabled' | 'restoring';

let state: State = 'default';
let savedUserSelect = '';

export function disableTextSelection() {
  if (state === 'default') {
    savedUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.webkitUserSelect = 'none';
  }

  state = 'disabled';
}

export function restoreTextSelection() {
  // If the state is already default, there's nothing to do.
  // If it is restoring, then there's no need to queue a second restore.
  if (state !== 'disabled') {
    return;
  }

  state = 'restoring';

  // There appears to be a delay on iOS where selection still might occur
  // after pointer up, so wait a bit before removing user-select.
  setTimeout(() => {
    // Wait for any CSS transitions to complete so we don't recompute style
    // for the whole page in the middle of the animation and cause jank.
    requestAnimationFrame(() => {
      // Avoid race conditions
      if (state === 'restoring') {
        if (document.documentElement.style.webkitUserSelect === 'none') {
          document.documentElement.style.webkitUserSelect = savedUserSelect || '';
        }

        savedUserSelect = '';
        state = 'default';
      }
    });
  }, 300);
}
