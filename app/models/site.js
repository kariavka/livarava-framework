import DS from 'ember-data';
import {belongsTo} from 'ember-data/relationships';

export default DS.Model.extend({
    // Type
    type: 'site',

    // Attributes
    title: DS.attr('string'),
    url: DS.attr('string'),
    summary: DS.attr('string'),
    description: DS.attr('string'),
    username: DS.attr('string'),
    feedback_email: DS.attr('string'),
    api_key: DS.attr('string'),
    language: DS.attr('string'),

    // Datetime
    created: DS.attr('datetime'),
    updated: DS.attr('datetime'),

    // Icon
    icon: DS.belongsTo('neuron'),
    icon_url: DS.attr('string'),

    // Image
    image: DS.belongsTo('neuron'),
    image_url: DS.attr('string'),

    // Relationships
    author: belongsTo('user'),

    // Meta
    meta_title: DS.attr('string'),
    meta_description: DS.attr('string'),
    meta_keywords: DS.attr('string'),
    meta_image: DS.belongsTo('neuron'),
    meta_image_url: DS.attr('string'),

    // Other
    rights: DS.attr('plain-object'),

    // Billing
    plan: DS.attr('string'),
    currency: DS.attr('string'),
    billing_fullname: DS.attr('string'),
    billing_address: DS.attr('string'),
    billing_email: DS.attr('string'),
    billing_phone: DS.attr('string'),
    balance: DS.attr('plain-object'),
    space_total: DS.attr('string'),
    space_used: DS.attr('string'),
    space_left: DS.attr('string'),
    space_calculating: DS.attr('boolean'),
});
