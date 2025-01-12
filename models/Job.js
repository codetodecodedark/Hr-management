const mysql = require('mysql2/promise');

class Job {
    static async getAll(search = '') {
        try {
            const query = 'SELECT * FROM Job_Postings WHERE status = "open" AND (title LIKE ? OR description LIKE ? OR department LIKE ?)';
            const [rows] = await global.db.execute(query, [`%${search}%`, `%${search}%`, `%${search}%`]);
            return rows;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw new Error('Failed to fetch jobs');
        }
    }

    static async getOpenJobPostings() {
        try {
            const [rows] = await global.db.execute('SELECT * FROM Job_Postings WHERE status = "open"');
            return rows;
        } catch (error) {
            console.error('Error fetching open jobs:', error);
            throw new Error('Failed to fetch open jobs');
        }
    }

    static async create(data) {
        const { title, description, department, location, status } = data;
        try {
            await global.db.execute(
                'INSERT INTO Job_Postings (title, description, department, location, posted_date, status, created_at) VALUES (?, ?, ?, ?, NOW(), ?, NOW())',
                [title, description, department, location, status]
            );
        } catch (error) {
            console.error('Error creating job posting:', error);
            throw new Error('Failed to create job posting');
        }
    }

    static async update(id, data) {
        const { title, description, department, location, status } = data;
        try {
            await global.db.execute(
                'UPDATE Job_Postings SET title = ?, description = ?, department = ?, location = ?, status = ? WHERE id = ?',
                [title, description, department, location, status, id]
            );
        } catch (error) {
            console.error('Error updating job posting:', error);
            throw new Error('Failed to update job posting');
        }
    }

    static async delete(id) {
        try {
            await global.db.execute('DELETE FROM Job_Postings WHERE id = ?', [id]);
        } catch (error) {
            console.error('Error deleting job posting:', error);
            throw new Error('Failed to delete job posting');
        }
    }
}

module.exports = Job;
