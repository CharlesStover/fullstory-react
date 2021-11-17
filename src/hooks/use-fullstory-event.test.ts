import { event } from '@fullstory/browser';
import { renderHook } from '@testing-library/react-hooks';
import { useFullStoryEvent } from '..';

describe('useFullStoryEvent', (): void => {
  it('should return the FullStory `event` method', (): void => {
    const { result } = renderHook(useFullStoryEvent);
    expect(result.current).toBe(event);
  });
});
