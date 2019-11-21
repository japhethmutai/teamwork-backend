const moment = require('moment');
const pool = require('../config');
const Helper = require('./Helper');

/**
 * Create A User
 * @param {object} req 
 * @param {object} res
 * @returns {object} reflection object 
 */
exports.createUser = (req, res, next) => {
    if (
        !req.body.first_name || !req.body.last_name || 
        !req.body.email || !req.body.password || 
        !req.body.gender || !req.body.job_role || 
        !req.body.department || !req.body.address) {
        return res.status(400).send({'message': 'Some values are missing'});
    }
    if (!Helper.isValidEmail(req.body.email)) {
        return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    const createQuery = `INSERT INTO
    users(first_name, last_name, email, password, gender, job_role, department, address, created_on)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    returning user_id`;
    const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    hashPassword,
    req.body.gender,
    req.body.job_role,
    req.body.department,
    req.body.address,
    moment(new Date())
    ];

    pool.query(createQuery, values, function(err, result) {
        if(err) {
            res.status(500).json({
                error: err
            });
        }
        else {
            res.status(201).json({
                message: "User account successfully created!",
                token: Helper.generateToken(result.rows[0].user_id),
                userId: result.rows[0].user_id
            });
        }
    }); 
};

exports.login = (req, res, next) => {

};
