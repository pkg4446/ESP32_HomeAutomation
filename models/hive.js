const Sequelize = require('sequelize');

module.exports = class Hive extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            NO: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            //장비번호
            EQPMN_ESNTL_SN: {
                type: Sequelize.STRING(32),
                allowNull: false,
            },
            //측정시간
            MESURE_DT: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            //온도
            MESURE_VAL_01: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            //습도
            MESURE_VAL_02: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            //벌통 무게
            MESURE_VAL_03: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            //당액 공급량
            MESURE_VAL_04: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },

        },{
            sequelize,
            timestamps : false,
            underscored: false,
            modelName  : 'Hive',
            tableName  : 'hive',
            paranoid   : false,
            charset    : 'utf8',
            collate    : 'utf8_general_ci',
        });
    }
    static associate(db) {
    }
}