/**
 * Class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    class_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    instructor: {
      type: 'integer',
      model: 'instructor',
      columnName: 'instructor_id'
    },

    subject: {
      type: 'string'
    },

    course: {
      type: 'integer'
    },

  },
  // tells sails NOT to create a primary key
  autoPK: false
};
