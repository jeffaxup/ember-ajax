import DS from 'ember-data';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(AjaxServiceSupport, {
  namespace: 'api',

  ajaxOptions() {
    const hash = this._super(...arguments);

    hash.headers = {
      'X-Silly-Option': 'Hi!'
    };

    return hash;
  }
});
