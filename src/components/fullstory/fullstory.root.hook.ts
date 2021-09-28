import { identify, init } from '@fullstory/browser';
import { useEffect } from 'react';

interface Props {
  readonly debug: boolean | undefined;
  readonly devMode: boolean | undefined;
  readonly host: string | undefined;
  readonly namespace: string | undefined;
  readonly orgId: string;
  readonly recordCrossDomainIFrames: boolean | undefined;
  readonly recordOnlyThisIFrame: boolean | undefined;
  readonly script: string | undefined;
  readonly userDisplayName: string | undefined;
  readonly userEmail: string | undefined;
  readonly userUid: string | undefined;
}

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
}: Props): void {
  useEffect((): void => {
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

  useEffect((): void => {
    if (typeof userUid === 'undefined') {
      return;
    }

    identify(userUid, {
      displayName: userDisplayName,
      email: userEmail,
    });
  }, [userDisplayName, userEmail, userUid]);
}
