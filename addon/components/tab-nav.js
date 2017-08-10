import Ember from 'ember';
import layout from '../templates/components/tab-nav';

/**
 * Component that renders a list of tabs, and changes views based on the
 * selected tab.
 * @prop tabs {Array} The tabs to render: { title (string), content (component).
 */
export default Ember.Component.extend({
  layout,

  tabs: Ember.computed({
    set(key, value) {
      this.set('_tabs', value);
      if (value) {
        this.set('selectedTab', value[0]);
      } else {
        this.set('selectedTab', null);
      }

      return value;
    },
    get() {
      return this.get('_tabs');
    }
  }),

  actions: {
    selectTab(tab) {
      this.set('selectedTab', tab);
    }
  }
});
