import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  path: DS.attr('string'),
  language: DS.attr('string'),
  level: DS.attr('number', {defaultValue: 0}),
  order: DS.attr('number', {defaultValue: 0}),

  // Datetime
  // created: DS.attr('datetime'),
  // updated: DS.attr('datetime'),

  // Relationships
  author: DS.belongsTo('user'),
  site: DS.belongsTo('neuron'),
  parent: DS.belongsTo('neuron'),

  // Computed
  nextLevel: Ember.computed('level', function () {
    return parseInt(this.get('level')) + 1;
  })
});
