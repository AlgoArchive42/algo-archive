const db = require('../model')

const deleteProblem = async (req, res, next) =>{
  try {
    const queryString = `
    DELETE FROM problems WHERE title=$1;`
    
    await db.query(queryString, [req.body.title]);
    res.locals.successful = true;

    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
};

module.exports = deleteProblem;