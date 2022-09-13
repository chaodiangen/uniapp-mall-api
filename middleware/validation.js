const { validationResult, buildCheckFunction } = require('express-validator');
// parallel processing
const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};
exports = module.exports = validate

exports.isValidObjectId = (location, fields, title) => {
    return buildCheckFunction(location)(fields).custom(async value => {
        if (!Number(value)) {
            return Promise.reject(title)
        }
    })
}