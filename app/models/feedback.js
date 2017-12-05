import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  text: DS.attr('string'),
  read: DS.attr('boolean'),

  // Datetime
  created: DS.attr('datetime'),
  updated: DS.attr('datetime'),

  // Status
  status: DS.attr('string', {defaultValue: 'opened'}),
  statusLabel: Ember.computed('status', function () {
    const status = this.get('status');
    return status;
  }),

  // Relationhips
  author: DS.belongsTo('user'),
  site: DS.belongsTo('neuron'),
});
