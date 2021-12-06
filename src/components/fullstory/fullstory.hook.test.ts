import {
  TEST_ANONYMIZE,
  TEST_IDENTIFY,
  TEST_INIT,
  TEST_RESTART,
  TEST_SHUTDOWN,
} from '../../test/mocks/mock-fullstory-browser';
import { renderHook } from '@testing-library/react-hooks';
import useFullStory from './fullstory.hook';
import TEST_IDENTIFY_PROPS from '../../test/constants/test-identify-props';
import TEST_INIT_PROPS from '../../test/constants/test-init-props';
import type IdentifyProps from '../../types/identify-props';

const ONCE = 1;
const TEST_DISPLAY_NAME = 'test display name';
const TEST_EMAIL = 'test@email.com';
const TEST_UID = 'test-uid';
const TWICE = 2;

const TEST_DEFINED_IDENTIFY_PROPS: IdentifyProps = {
  userDisplayName: TEST_DISPLAY_NAME,
  userEmail: TEST_EMAIL,
  userUid: TEST_UID,
};

describe('useFullStory', (): void => {
  it('should init', (): void => {
    renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });

    expect(TEST_INIT).toHaveBeenCalledTimes(ONCE);
    expect(TEST_RESTART).not.toHaveBeenCalled();
    expect(TEST_INIT).toHaveBeenLastCalledWith(TEST_INIT_PROPS);
  });

  it('should shutdown after initializing', (): void => {
    const { unmount } = renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });
    expect(TEST_SHUTDOWN).not.toHaveBeenCalled();

    unmount();

    expect(TEST_SHUTDOWN).toHaveBeenCalledTimes(ONCE);
    expect(TEST_SHUTDOWN).toHaveBeenLastCalledWith();
  });

  it('should restart if already init', (): void => {
    const { unmount } = renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });

    expect(TEST_INIT).toHaveBeenCalledTimes(ONCE);
    unmount();

    renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });

    expect(TEST_INIT).toHaveBeenCalledTimes(ONCE);
    expect(TEST_RESTART).toHaveBeenCalledTimes(ONCE);
    expect(TEST_RESTART).toHaveBeenCalledWith();
  });

  it('should shutdown after restarting', (): void => {
    const { unmount: unmount1 } = renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });
    unmount1();

    const { unmount: unmount2 } = renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
      },
    });
    unmount2();

    expect(TEST_SHUTDOWN).toHaveBeenCalledTimes(TWICE);
    expect(TEST_SHUTDOWN).toHaveBeenLastCalledWith();
  });

  it('should anonymize if no user ID', (): void => {
    renderHook(useFullStory, {
      initialProps: {
        ...TEST_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
        devMode: false,
      },
    });
    expect(TEST_ANONYMIZE).toHaveBeenCalledTimes(ONCE);
    expect(TEST_ANONYMIZE).toHaveBeenLastCalledWith();
    expect(TEST_IDENTIFY).not.toHaveBeenCalled();
  });

  it('should anonymize in dev mode', (): void => {
    renderHook(useFullStory, {
      initialProps: {
        ...TEST_DEFINED_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
        devMode: true,
      },
    });
    expect(TEST_ANONYMIZE).toHaveBeenCalledTimes(ONCE);
    expect(TEST_ANONYMIZE).toHaveBeenLastCalledWith();
    expect(TEST_IDENTIFY).not.toHaveBeenCalled();
  });

  it('should identify', (): void => {
    renderHook(useFullStory, {
      initialProps: {
        ...TEST_DEFINED_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
        devMode: false,
      },
    });

    expect(TEST_ANONYMIZE).not.toHaveBeenCalled();
    expect(TEST_IDENTIFY).toHaveBeenCalledTimes(ONCE);
    expect(TEST_IDENTIFY).toHaveBeenLastCalledWith(TEST_UID, {
      displayName: TEST_DISPLAY_NAME,
      email: TEST_EMAIL,
    });
  });

  it('should anonymize on unmount', (): void => {
    const { unmount } = renderHook(useFullStory, {
      initialProps: {
        ...TEST_DEFINED_IDENTIFY_PROPS,
        ...TEST_INIT_PROPS,
        devMode: false,
      },
    });
    
    expect(TEST_ANONYMIZE).not.toHaveBeenCalled();

    unmount();

    expect(TEST_ANONYMIZE).toHaveBeenCalledTimes(ONCE);
    expect(TEST_ANONYMIZE).toHaveBeenLastCalledWith();
  });
});
