"use strict";

module.exports = function (sequelize, DataTypes) {
    const Barang = sequelize.define(
        "Barang",
        {
            idBarang: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "id_barang"
            },
            namaBarang: {
                allowNull: false,
                type: DataTypes.STRING(50),
                field: "nama_barang"
            }
        },
        { tableName: "tb_barang" }
    );

    return Barang;
};
