import { setUserVars } from '@fullstory/browser';
import { renderHook } from '@testing-library/react-hooks';
import { useFullStorySetUserVars } from '..';

describe('useFullStorySetUserVars', (): void => {
  it('should return the FullStory `setUserVars` method', (): void => {
    const { result } = renderHook(useFullStorySetUserVars);
    expect(result.current).toBe(setUserVars);
  });
});
