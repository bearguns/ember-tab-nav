import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | tab nav', function() {
  setupComponentTest('tab-nav', {
    integration: true
  });

  it('displays a tab for each item', function() {
    this.register('template:components/dummy-component',  hbs``);
    this.render(hbs`{{tab-nav tabs=(array
      (safe-hash title="first" content=(component "dummy-component"))
      (safe-hash title="second" content=(component "dummy-component"))
    )}}`);
    expect(document.querySelectorAll('li')).to.have.length(2);
  });

  it('switches views when a tab is clicked', function() {
    this.register('template:components/dummy-component',  hbs`<div id="content">{{content}}</div>`);
    this.render(hbs`{{tab-nav tabs=(array
      (safe-hash title="first" content=(component "dummy-component" content="first"))
      (safe-hash title="second" content=(component "dummy-component" content="second"))
    )}}`);
    expect(document.querySelector('#content').text()).to.contain('first');
    document.querySelector('a').click();
    expect(document.querySelector('#content').text()).to.contain('second');
  });
});
