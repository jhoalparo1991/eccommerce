'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

const { USER_TABLE } = require('../models/user.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE,{
      id:{
          type:DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
      },
      name:{
          type:DataTypes.STRING(30),
          allowNull:false,
      },
      lastName:{
          type:DataTypes.STRING(30),
          allowNull:false,
          field:'lastname'
      },
      role:{
          type: DataTypes.ENUM('admin','basic','customer','seller'),
          allowNull:false,
          defaultValue:'basic'
      },
      email:{
          type:DataTypes.STRING(100),
          allowNull:false,
          unique:true
      },
      password:{
          type:DataTypes.STRING(256),
          allowNull:false
      },
      photo:{
          type:DataTypes.STRING(256),
          allowNull:true
      },
      actived:{
          type:DataTypes.BOOLEAN,
          defaultValue: false
      },
      token:{
          type:DataTypes.TEXT,
          allowNull:true
      },
      createdAt:{
          type: DataTypes.DATE,
          defaultValue:DataTypes.NOW,
          field:'created_at'
      }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
