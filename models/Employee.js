const mysql = require('mysql2/promise');

class Employee {
    static async getAll(search = '') {
        try {
            const query = 'SELECT * FROM Employees WHERE name LIKE ? OR designation LIKE ? OR department LIKE ?';
            const [rows] = await global.db.execute(query, [`%${search}%`, `%${search}%`, `%${search}%`]);
            return rows;
        } catch (error) {
            console.error('Error fetching employees:', error);
            throw new Error('Failed to fetch employees');
        }
    }

    static async create(data) {
        const { name, designation, department, email, phone, hire_date } = data;
        try {
            await global.db.execute(
                'INSERT INTO Employees (name, designation, department, email, phone, hire_date, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [name, designation, department, email, phone, hire_date]
            );
        } catch (error) {
            console.error('Error creating employee:', error);
            throw new Error('Failed to create employee');
        }
    }

    static async update(id, data) {
        const { name, designation, department, email, phone, hire_date } = data;
        try {
            await global.db.execute(
                'UPDATE Employees SET name = ?, designation = ?, department = ?, email = ?, phone = ?, hire_date = ? WHERE id = ?',
                [name, designation, department, email, phone, hire_date, id]
            );
        } catch (error) {
            console.error('Error updating employee:', error);
            throw new Error('Failed to update employee');
        }
    }

    static async delete(id) {
        try {
            await global.db.execute('DELETE FROM Employees WHERE id = ?', [id]);
        } catch (error) {
            console.error('Error deleting employee:', error);
            throw new Error('Failed to delete employee');
        }
    }
}

module.exports = Employee;
