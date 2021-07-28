const getTestModel = require('../models/test.model.js'); //Appel du model

//Display test page 
exports.getNamePage = (req, res) => {
    res.render('Test/test-namepage');
};

