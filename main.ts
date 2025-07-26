import { overrideThemes } from 'markedit-theming';
import { quietlight } from '@uiw/codemirror-theme-quietlight';

overrideThemes({
  light: { extension: quietlight },
  options: { settingsKey: 'extension.markeditThemeQuietLight' },
});
