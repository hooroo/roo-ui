import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Roo UI',
});

addons.setConfig({
  enableShortcuts: true,
  initialActive: 'sidebar',
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'right',
  showNav: true,
  showPanel: true,
  sidebarAnimations: true,
  selectedPanel: undefined,
  showRoots: true,
  theme,
});
