import getFullStoryWindow from '../../utils/get-fullstory-window';
import type FullStoryWindow from '../../types/fullstory-window';
import init from '../utils/init';

const fullStoryWindow: FullStoryWindow = getFullStoryWindow();
export const TEST_ANONYMIZE = jest.fn();
export const TEST_IDENTIFY = jest.fn();
export const TEST_INIT = jest.fn();
export const TEST_RESTART = jest.fn();
export const TEST_SHUTDOWN = jest.fn();

beforeEach((): void => {
  delete fullStoryWindow._fs_initialized;
  TEST_INIT.mockImplementation(init);
});

jest.mock('@fullstory/browser', () => ({
  anonymize: TEST_ANONYMIZE,
  identify: TEST_IDENTIFY,
  init: TEST_INIT,
  restart: TEST_RESTART,
  shutdown: TEST_SHUTDOWN,
}));
