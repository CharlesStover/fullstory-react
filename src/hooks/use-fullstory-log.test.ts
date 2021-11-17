import { log } from '@fullstory/browser';
import { renderHook } from '@testing-library/react-hooks';
import { useFullStoryLog } from '..';

describe('useFullStoryLog', (): void => {
  it('should return the FullStory `log` method', (): void => {
    const { result } = renderHook(useFullStoryLog);
    expect(result.current).toBe(log);
  });
});
