import { event } from '@fullstory/browser';

// The FullStory `event` method does not need to be accessed with a hook,
//   because FullStory is a singleton here, but accessing it with a hook allows
//   this package to be extensible into FullStory instances in the future.

export default function useFullStoryEvent(): typeof event {
  return event;
}
