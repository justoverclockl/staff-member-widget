import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import MyWidget from './components/staffMembersWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'staffMembersWidget',
      component: MyWidget,
      isUnique: true,
      placement: 'end',
      position: 1,
      isDisabled: () => {
        return !app.forum.attribute('canSearchUsers');
      },
    })
    .extend(app, 'justoverclock-staff-members-widget');
}
