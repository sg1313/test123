const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('albums', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "앨범명"
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "앨범소개"
    },
    info: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "앨범정보"
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "앨범커버"
    },
    tracklist: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "트랙리스트"
    },
    release: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "날짜"
    }
  }, {
    sequelize,
    tableName: 'albums',
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
