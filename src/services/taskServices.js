import { pool } from "../config/db.js";

export const taskServices = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM task WHERE active = 1");
        return result[0];
    },
    getOne: async (id) => {
        const result = await pool.query("SELECT * FROM task WHERE id = ? AND active = 1", [id]);
        return result[0];
    },
    create: async (task) => {
        const result = await pool.query("INSERT INTO task (task) VALUES (?)", [task]);
        return result[0];
    },
    update: async (id, task) => {
        const result = await pool.query("UPDATE task SET task = ? WHERE id = ?", [task,id]);
        return result[0];
    },
    delete: async (id) => {
        const result = await pool.query("UPDATE task SET active = ? WHERE id = ?", [0,id]);
        return result[0];
    }
};