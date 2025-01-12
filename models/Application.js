const mysql = require('mysql2/promise');

class Application {
    static async getByJob(job_id) {
        try {
            const [rows] = await global.db.execute('SELECT * FROM Applications WHERE job_id = ?', [job_id]);
            return rows;
        } catch (error) {
            console.error('Error fetching applications:', error);
            throw new Error('Failed to fetch applications');
        }
    }

    static async getAll(filters = {}) {
        const { status, jobId, userId } = filters;
        let query = 'SELECT * FROM Applications WHERE 1 = 1';
        const params = [];
        if (status) {
            query += ' AND status = ?';
            params.push(status);
        }
        if (jobId) {
            query += ' AND job_id = ?';
            params.push(jobId);
        }
        if (userId) {
            query += ' AND user_id = ?';
            params.push(userId);
        }
        try {
            const [rows] = await global.db.execute(query, params);
            return rows;
        } catch (error) {
            console.error('Error fetching applications:', error);
            throw new Error('Failed to fetch applications');
        }
    }


    static async create(data) {
        const { job_id, candidate_name, candidate_email, resume_url } = data;
        try {
            await global.db.execute(
                'INSERT INTO Applications (job_id, candidate_name, email, resume_url, status, applied_date) VALUES (?, ?, ?, ?, "Pending", NOW())',
                [job_id, candidate_name, candidate_email, resume_url]
            );
        } catch (error) {
            console.error('Error creating application:', error);
            throw new Error('Failed to create application');
        }
    }

    static async getById(id) {
        try {
            const [rows] = await global.db.execute('SELECT * FROM Applications WHERE id = ?', [id]);

            if (rows.length === 0) {
                throw new Error(`No application found with id ${id}`);
            }

            return rows[0];  // Return the first row if found
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch application details');
        }
    }

    static async getPending() {
        try {
            const [rows] = await global.db.execute('SELECT * FROM Applications WHERE status = "pending"');
            return rows;
        } catch (error) {
            console.error('Error fetching pending applications:', error);
            throw new Error('Failed to fetch pending applications');
        }
    }



    static async updateStatus(id, status) {
        try {
            await global.db.execute('UPDATE Applications SET status = ? WHERE id = ?', [status, id]);
        } catch (error) {
            console.error('Error updating application status:', error);
            throw new Error('Failed to update application status');
        }
    }
}

module.exports = Application;
