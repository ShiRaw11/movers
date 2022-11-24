const knex = require('./knex.js');
const get = require('lodash/get');


module.exports = {
    
    search: async (tableName, whereParams, columns = '*', orderParam, orderBy) => {
        if (orderBy === undefined) {
            let result = await knex.select(columns)
                .from(tableName)
                .where(whereParams);
            if (result.length === 1) result = result[0];
            return result;
        } else {
            let result = await knex.select(columns)
                .from(tableName)
                .where(whereParams)
                .orderBy(orderParam, orderBy);
            return result;
        }
    },
 


    getAll: async (tableName, columns) => {
        let responseData = await knex.select(columns='*').from(tableName);
        return responseData;
    },
    getOne: async (tableName, columns) => {
        let responseData = await knex.select(columns).from(tableName);
        return responseData;
    },

    getById: async (id, table) => {
        const result = await knex.select()
            .from(table)
            .where({ 'id': id });
        return get(result, '[0]', {});
    },

    create: async (tableName, data) => {
        let result = await knex(tableName).insert(data).returning('id');
        return result[0];
    },

    update: async (tableName, whereParams, data) => {
        let result = await knex(tableName).where(whereParams).update(data);
        return result;
    },

    delete: async (tableName, id, data) => {
        let result = await knex(tableName).where({ 'id': id }).update({ 'deleted': data });
        return get(result, '[0]', {});
    },


   
    
};
