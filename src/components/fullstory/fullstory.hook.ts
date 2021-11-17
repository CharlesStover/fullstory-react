import {
  anonymize,
  identify,
  init,
  restart,
  shutdown,
} from '@fullstory/browser';
import { useEffect } from 'react';
import type IdentifyProps from '../../types/identify-props';
import type InitProps from '../../types/init-props';
import isFullStoryInitialized from '../../utils/is-fullstory-initialized';

export default function useFullStory({
  debug,
  devMode,
  host,
  namespace,
  orgId,
  recordCrossDomainIFrames,
  recordOnlyThisIFrame,
  script,
  userDisplayName,
  userEmail,
  userUid,
}: IdentifyProps & InitProps): void {
  useEffect((): VoidFunction => {
    if (isFullStoryInitialized()) {
      restart();

      return (): void => {
        shutdown();
      };
    }

    init({
      debug,
      devMode,
      host,
      namespace,
      orgId,
      recordCrossDomainIFrames,
      recordOnlyThisIFrame,
      script,
    });

    return (): void => {
      shutdown();
    };
  }, [
    debug,
    devMode,
    host,
    namespace,
    orgId,
    recordCrossDomainIFrames,
    recordOnlyThisIFrame,
    script,
  ]);

  useEffect((): VoidFunction | undefined => {
    if (typeof userUid === 'undefined') {
      return;
    }

    identify(userUid.toString(), {
      displayName: userDisplayName,
      email: userEmail,
    });

    return (): void => {
      anonymize();
    };
  }, [userDisplayName, userEmail, userUid]);
}
