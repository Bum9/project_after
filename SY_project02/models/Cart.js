const Sequelize = require("sequelize");

module.exports = class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        total: {
          type: Sequelize.DECIMAL(11, 0).UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Cart",
        tableName: "carts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Cart.belongsTo(db.User);
    db.Cart.hasMany(db.CartItem);
  }
};
