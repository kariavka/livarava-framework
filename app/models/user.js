import Model from "ember-data/model";
import DS from "ember-data";

export default Model.extend({
  // Attributes
  email: DS.attr('string'),
  phone: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  fullname: DS.attr('string'),
  username: DS.attr('string'),
  title: DS.attr('string'),
  header: DS.attr('string'),
  about: DS.attr('string'),
  timezone: DS.attr('string'),
  sections: DS.attr(),
  online: DS.attr('boolean'),

  // Type
  type: 'user',

  // Datetime
  created: DS.attr('datetime'),
  updated: DS.attr('datetime'),

  // Icon
  icon: DS.attr('string'),
  icon_url: DS.attr('string'),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),

  // Dynamic
  role: DS.attr(),

  // Rights
  rights: DS.attr('plain-object'),
});
