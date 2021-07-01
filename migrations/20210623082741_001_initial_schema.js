exports.up = async(knex)=> {
    await knex.raw(`CREATE TABLE initTable (coltest varchar(20))`);
};

exports.down = async (knex)=> {
    await knex.raw(`DROP TABLE initTable`);
};