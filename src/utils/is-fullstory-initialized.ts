import type FullStoryWindow from '../types/fullstory-window';
import getFullStoryWindow from './get-fullstory-window';

export default function isFullStoryInitialized(): boolean {
  const fullStoryWindow: FullStoryWindow = getFullStoryWindow();
  return fullStoryWindow._fs_initialized === true;
}
