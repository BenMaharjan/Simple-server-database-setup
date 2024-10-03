import { pool } from "../index.js";

async function resetDatabase() {
    try {
        // Drop existing tables if they exist
        await pool.query(`
            DROP TABLE IF EXISTS workout CASCADE;
        `);

        // Create the workout table
        await pool.query(`
            CREATE TABLE workout (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                exercise VARCHAR(255) NOT NULL,
                description TEXT
            );
        `);

        // Seed the workout table
        await pool.query(`
            INSERT INTO workout (exercise, description)
            VALUES 
                ('Chest', 'Bench press'),
                ('Chest', 'Dumbell press'),
                ('Bicep', 'Barbell curl'),
                ('Tricep', 'Tricep extension')
        `);

        console.log("Database reset successful");
    } catch (error) {
        console.error("Database reset failed: ", error);
    } finally {
        // End the pool
        await pool.end();
    }
}

await resetDatabase();