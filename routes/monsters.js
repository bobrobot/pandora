exports.findAll = function(req, res) {
    res.send([{name:'monster1'}, {name:'monster2'}, {name:'monster3'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};