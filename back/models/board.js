const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "닉네임"
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "내용"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "등록일"
    }
  }, {
    sequelize,
    tableName: 'board',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
