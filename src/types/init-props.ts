export default interface InitProps {
  readonly debug: boolean | undefined;
  readonly devMode: boolean | undefined;
  readonly host: string | undefined;
  readonly namespace: string | undefined;
  readonly orgId: string;
  readonly recordCrossDomainIFrames: boolean | undefined;
  readonly recordOnlyThisIFrame: boolean | undefined;
  readonly script: string | undefined;
}
