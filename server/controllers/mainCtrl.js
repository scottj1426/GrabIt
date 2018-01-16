const testSave = (req, res) => {
    req.app.get('db').saveTest(req.body).then(result => res.json(result))
}


module.exports = {
    testSave,
}