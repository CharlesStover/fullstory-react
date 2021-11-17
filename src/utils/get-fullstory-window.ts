import type FullStoryWindow from '../types/fullstory-window';

/*
We need to access `window` through a getter because it must only be accessed
  from within a `useEffect` hook. Accessing it directly outside of a `useEffect`
  hook, such as via the module scope, will throw a `ReferenceError` during
  server-side rendering.
*/

export default function getFullStoryWindow(): FullStoryWindow {
  return window;
}
