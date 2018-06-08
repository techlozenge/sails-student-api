/**
 * Assignment.js
 * 
 * 1/29/2018: Updated this to handle Student and Class so those values would be inserted
 * into the JSON so they could be used by the Angular Assignment frontend 
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

    student: {
      type: 'integer',
      model: 'student',
      columnName: 'student_id'
    },

    assignment_nbr: {
      type: 'integer',
    },

    grade: {
      type: 'integer',
      model: 'grade',
      columnName: 'grade_id'
    },

    class: {
      type: 'integer',
      model: 'class',
      columnName: 'class_id'
    }

  },
  // tells sails NOT to create a primary key
  autoPK: false
};
