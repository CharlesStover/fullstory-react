import { render } from '@testing-library/react';
import { FullStoryUnmaskWithConsent } from '../..';

describe('FullStoryUnmaskWithConsent', (): void => {
  it('should render an element with class name `fs-unmask-with-consent`', (): void => {
    const { getByText } = render(
      <FullStoryUnmaskWithConsent>Hello world</FullStoryUnmaskWithConsent>,
    );

    expect(getByText('Hello world').classList).toContain(
      'fs-unmask-with-consent',
    );
  });
});
