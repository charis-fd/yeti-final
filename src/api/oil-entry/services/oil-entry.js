'use strict';

/**
 * oil-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oil-entry.oil-entry');
