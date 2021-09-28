const TEST_IDENTIFY = jest.fn();
const TEST_INIT = jest.fn();
jest.mock('@fullstory/browser', () => ({
  identify: TEST_IDENTIFY,
  init: TEST_INIT,
}));

import { renderHook } from '@testing-library/react-hooks';
import useFullStory from './fullstory.root.hook';

const ONCE = 1;

describe('useFullStory', (): void => {
  it('should init', (): void => {
    renderHook(useFullStory, {
      initialProps: {
        debug: true,
        devMode: true,
        host: 'test-host',
        namespace: 'test-namespace',
        orgId: 'test-org-id',
        recordCrossDomainIFrames: true,
        recordOnlyThisIFrame: true,
        script: 'test-script',
        userDisplayName: undefined,
        userEmail: undefined,
        userUid: undefined,
      },
    });

    expect(TEST_INIT).toHaveBeenCalledTimes(ONCE);
    expect(TEST_INIT).toHaveBeenLastCalledWith({
      debug: true,
      devMode: true,
      host: 'test-host',
      namespace: 'test-namespace',
      orgId: 'test-org-id',
      recordCrossDomainIFrames: true,
      recordOnlyThisIFrame: true,
      script: 'test-script',
    });
  });

  it('should identify', (): void => {
    const TEST_DISPLAY_NAME = 'test display name';
    const TEST_EMAIL = 'test@email.com';
    const TEST_UID = 'test-uid';

    renderHook(useFullStory, {
      initialProps: {
        debug: undefined,
        devMode: undefined,
        host: undefined,
        namespace: undefined,
        orgId: 'test-org-id',
        recordCrossDomainIFrames: undefined,
        recordOnlyThisIFrame: undefined,
        script: undefined,
        userDisplayName: TEST_DISPLAY_NAME,
        userEmail: TEST_EMAIL,
        userUid: TEST_UID,
      },
    });

    expect(TEST_IDENTIFY).toHaveBeenCalledTimes(ONCE);
    expect(TEST_IDENTIFY).toHaveBeenLastCalledWith(TEST_UID, {
      displayName: TEST_DISPLAY_NAME,
      email: TEST_EMAIL,
    });
  });
});
