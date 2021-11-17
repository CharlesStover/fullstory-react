import { getCurrentSessionURL } from '@fullstory/browser';
import { renderHook } from '@testing-library/react-hooks';
import { useFullStoryGetCurrentSessionURL } from '..';

describe('useFullStoryGetCurrentSessionURL', (): void => {
  it('should return the FullStory `getCurrentSessionURL` method', (): void => {
    const { result } = renderHook(useFullStoryGetCurrentSessionURL);
    expect(result.current).toBe(getCurrentSessionURL);
  });
});
