import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import app from 'flarum/admin/app';

export default class AutoPostBadgePro extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    const getGroups = app.store.find('groups').then((result) => {
      this.groups = result;
      console.log(this.groups);
      m.redraw();
    });
  }

  content() {
    return (
      <div className="container-staff-members-widget">
        <h1>Actual Groups with ID</h1>
        <div className="container-staff-member-list">
          {this.groups &&
            this.groups.map((group) => {
              return (
                <div className="entranceText">
                  {group.data.attributes.nameSingular} - Id: {group.data.id}
                </div>
              );
            })}
        </div>

        <form className="form-inline staff-members-widget">
          <label>{app.translator.trans('justoverclock-staff-members-widget.admin.selectedGroupsId')}:</label>
          <input
            type="text"
            id="groupsId"
            placeholder="1,3"
            name="groupsId"
            bidi={this.setting('justoverclock-staff-members-widget.selectedGroups')}
          />
          <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary staff-members-widget">
            <i className="fas fa-save staff-members-widget" />
          </Button>
        </form>
      </div>
    );
  }
}
