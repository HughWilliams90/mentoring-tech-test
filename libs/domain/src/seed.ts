import {AppDataSource} from "./data-source";

const mysql = require('mysql2/promise');

function getRandomDuration() {
    return Math.floor(Math.random() * 120) + 1;
}

export async function seedExercises() {
    try {
        const result = await AppDataSource.manager.query('SELECT COUNT(*) as count FROM exercises');
        const count = result[0].count;

        if (count > 0) {
            console.log(`Exercises table already has ${count} row(s). Skipping seeding.`);
            return;
        }

        const rows = [];

        const activities = [
            'Run',
            'Weights',
            'Swimming',
            'Rowing',
            'Cycling',
            'Golf',
            'Climbing',
            'Skipping'
        ];

        for (let i = 1; i <= 10000; i++) {
            const type = activities[Math.floor(Math.random() * activities.length)]
            const duration = getRandomDuration();
            const location = Math.floor(Math.random() * 1000) + 1;
            rows.push([i, type, duration, location]);
        }

        // Optional: Clear table before inserting
        await AppDataSource.manager.query('DELETE FROM exercises');

        // Insert in batches of 200 to avoid large single queries
        const batchSize = 200;
        for (let i = 0; i < rows.length; i += batchSize) {
            const batch = rows.slice(i, i + batchSize);
            await AppDataSource.manager.query(
                'INSERT INTO exercises (id, type, duration, location) VALUES ?',
                [batch]
            );
            console.log(`Inserted rows ${i + 1} to ${i + batch.length}`);
        }

        console.log('Data seeding complete.');
    } catch (err) {
        console.error('Error seeding data:', err);
    }
}
