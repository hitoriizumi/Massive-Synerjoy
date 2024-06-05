import {Sequelize} from "sequelize";

const db = new Sequelize('synerjoy_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;