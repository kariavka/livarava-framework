import DS from "ember-data";

export default DS.Model.extend({
    title: DS.attr('string'),
    type: 'post',
    display: DS.attr('string'),
    featured: DS.attr('boolean'),
    language: DS.attr('string'),
    summary: DS.attr('string'),
    description: DS.attr('string'),

    // Stats
    weight: DS.attr('number', {defaultValue: 0}),
    views: DS.attr('number', {defaultValue: 0}),
    subscriber_count: DS.attr('number', {defaultValue: 0}),  // Subscribers count
    comment_count: DS.attr('number', {defaultValue: 0}), // Comments count
    axon_count: DS.attr('number', {defaultValue: 0}),  // Axons count

    // Datetime
    created: DS.attr('datetime'),
    updated: DS.attr('datetime'),

    // Icon
    icon: DS.belongsTo('neuron'),
    icon_url: DS.attr('string'),

    // Image
    image: DS.belongsTo('neuron'),
    image_url: DS.attr('string'),
    main_image_url: DS.attr('string'),

    // Relationships
    author: DS.belongsTo('user'),
    site: DS.belongsTo('neuron'),

    // Meta
    meta_title: DS.attr('string'),
    meta_description: DS.attr('string'),
    meta_keywords: DS.attr('string'),
    meta_image: DS.belongsTo('neuron'),
    meta_image_url: DS.attr('string'),
});
