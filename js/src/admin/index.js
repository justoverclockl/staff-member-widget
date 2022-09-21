import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';
import SettingsPage from './components/SettingsPage';

app.initializers.add('justoverclock/staff-members-widget', () => {
  registerWidget(app);
  app.extensionData.for('justoverclock-staff-members-widget').registerPage(SettingsPage);
});
