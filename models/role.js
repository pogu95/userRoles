'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model

    static associate(models) {
        // define association here
        Role.belongsToMany(models.Permission, {
            through: models.RolePermission,
            as: 'permissions',
            foreignKey: 'role_id',
            otherKey: 'permission_id'
        })
    }
};
Role.init({
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles_roles',
    timestamps: false
});
return Role;
};