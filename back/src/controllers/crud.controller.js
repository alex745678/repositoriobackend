const db = require('../config/conexion_db');

class crudcontroller{

    // obtener todos los registros de una tabla
    async obtenerTodos(tabla){
        const[resultados] = await db.query(`SELECT * FROM ${tabla}`)
        return resultados;
    }

    // obteneer un registro por ID
    async obtenerUno(tabla, idCampo, ID){
        try {
        const [resultado] = await db.query(`SELECT * FROM ?? WHERE ?? = ?`, [tablla, idCampo, id]);
        return resultado[0];
        } catch (error) {
            throw error;
        }
    }

        // crear un nuevo registro
    async crear(tabla, data){
        try{
            const[resultado] = await db.query(`INSERT INTO ?? SET ?`, [tabla, data]);
            return { ...data, id: resultado.insertId };
        } catch (error) {
            throw error;
        }
    }

    // actualizar un registro por ID
    async actualizar(tabla, idcampo, id, data){
        try{
            const [resultado] = await db.query(`UPDATE ?? SET ? WHERE ??= ?`, [tabla, data, idcampo, id]);
            if (resultado.affectedrows === 0) {
                throw new error('Registro no encontrado');
            }
            return await this.obtenerUno(tabla, idcampo, id);
        }catch (error) {
            throw error;
        }
    }

    // Eliminar un registro por ID
    async eliminar(tabla, idCampo, id){
        try{
            const [resultado] = await db.query(`DELETE FROM ?? WHERE ?? = ?`, [tablla, idCampo, id]);
            if (resultado.affectedrows === 0){
            throw new error(`registro no encontrado`);
        }
        return {message: `Refgistro eliminado exitosamente` };
    }catch (error) {
            throw error;
        }
    }
}


    module.exports = crudcontroller;