/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    assignment_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    student_id: {
      type: 'integer',
    },

    assignment_nbr: {
      type: 'integer',
    },

    grade: {
      type: 'integer',
      model: 'grade',
      columnName: 'grade_id'
    },

    class_id: {
      type: 'integer',
    }

  },
  // tells sails NOT to create a primary key
  autoPK: false
};
