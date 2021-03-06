import type { ReactElement, ReactNode } from 'react';
import useFullStory from './fullstory.hook';

interface Props {
  readonly children: ReactNode;
  readonly debug?: boolean | undefined;
  readonly devMode?: boolean | undefined;
  readonly host?: string | undefined;
  readonly namespace?: string | undefined;
  readonly orgId: string;
  readonly recordCrossDomainIFrames?: boolean | undefined;
  readonly recordOnlyThisIFrame?: boolean | undefined;
  readonly script?: string | undefined;
  readonly userDisplayName?: string | undefined;
  readonly userEmail?: string | undefined;
  readonly userUid?: number | string | undefined;
}

export default function FullStory({
  children,
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
}: Props): ReactElement {
  useFullStory({
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
  });

  return <>{children}</>;
}
