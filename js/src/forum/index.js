import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/staff-members-widget', () => {
  registerWidget(app);
});
