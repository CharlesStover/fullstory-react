import { consent } from '@fullstory/browser';
import { renderHook } from '@testing-library/react-hooks';
import { useFullStoryConsent } from '..';

describe('useFullStoryConsent', (): void => {
  it('should return the FullStory `consent` method', (): void => {
    const { result } = renderHook(useFullStoryConsent);
    expect(result.current).toBe(consent);
  });
});
