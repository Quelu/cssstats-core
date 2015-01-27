
module.exports = function(obj) {

  var result = [];

  obj.eachRule(function(rule) {
    var declarations = [];
    rule.nodes.forEach(function(node) {
      if (node.type == 'decl') {
        declarations.push(node);
      }
    });
    result.push({
      type: rule.type,
      nodes: rule.nodes,
      declarations: declarations,
      selector: rule.selector
    });
  });

  return result;

};

