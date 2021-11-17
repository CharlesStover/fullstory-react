import type FullStoryWindow from '../../types/fullstory-window';
import getFullStoryWindow from '../../utils/get-fullstory-window';

const fullStoryWindow: FullStoryWindow = getFullStoryWindow();

export default function init(): void {
  fullStoryWindow._fs_initialized = true;
}
