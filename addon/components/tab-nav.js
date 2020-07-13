import { set, action } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/tab-nav';

/**
 * Component that renders a list of tabs, and changes views based on the
 * selected tab.
 * @prop tabs {Array} The tabs to render: { title (string), content (component) }.
 */
export default class TabsComponent extends Component {
  layout = layout;

  @action
  selectTab(value) {
    set(this, 'selectedTab', value);
  }
}
