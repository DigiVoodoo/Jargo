(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categoryList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n        <div data-role=\"page\" class=\"page\" id=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_Page\" data-theme=\"a\">\r\n            <div data-role=\"header\">\r\n                <h4>Jargo - ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n                <a href=\"#optionPage\" data-icon=\"gear\" class=\"optionButton\">Options</a>\r\n            </div>\r\n            <div data-role=\"content\">\r\n                <ul id=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_Container\" data-role=\"listview\" data-inset=\"true\" data-filter=\"true\">\r\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data};
  if (stack1 = helpers.categories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.categories; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n            </div>\r\n        </div>\r\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n						<li><a href=\"#\" class=\"catButton\" id=\"catButton_"
    + escapeExpression(((stack1 = depth1.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\r\n					";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['langMenu'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<li><a href=\"#\" class=\"langButton\" id=\"langButton_";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['phraseDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data};
  if (stack1 = helpers.categories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.categories; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.setIndex || depth0.setIndex),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "setIndex", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "\r\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth1),data:data};
  if (stack2 = helpers.phrases) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.phrases; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.phrases) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n";
  return buffer;
  }
function program3(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <div data-role=\"page\" class=\"page\" id=\""
    + escapeExpression(((stack1 = depth2.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = depth1.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_Page\" data-theme=\"a\">\r\n            <div data-role=\"header\">\r\n				<a href=\"#\" data-rel=\"back\" data-icon=\"arrow-l\">Back</a>\r\n                <h4> Jargo - "
    + escapeExpression(((stack1 = depth2.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\r\n                <a href=\"#optionPage\" data-icon=\"gear\" class=\"optionButton\">Options</a>\r\n            </div>\r\n            <div data-role=\"content\">\r\n				<ul data-role=\"listview\" data-inset=\"true\">\r\n					<li data-role=\"list-divider\" class=\"englishText\">";
  if (stack2 = helpers.english) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.english; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\r\n					<li class=\"translationText\">";
  if (stack2 = helpers.alternate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.alternate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\r\n					<li data-theme=\"b\"><a href=\"#\" class=\"playAudioButton\" onclick=\"PlayAudio('";
  if (stack2 = helpers.audioUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.audioUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\">Play Audio</a></li>\r\n				</ul>\r\n            </div>\r\n        </div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['phraseList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data};
  if (stack1 = helpers.categories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.categories; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.setIndex || depth0.setIndex),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "setIndex", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "\r\n        <div data-role=\"page\" class=\"page\" id=\""
    + escapeExpression(((stack1 = depth1.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_Page\" data-theme=\"a\">\r\n            <div data-role=\"header\">\r\n				<a href=\"#\" data-rel=\"back\" data-icon=\"arrow-l\">Back</a>\r\n                <h4> Jargo - "
    + escapeExpression(((stack1 = depth1.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\r\n                <a href=\"#optionPage\" data-icon=\"gear\" class=\"optionButton\">Options</a>\r\n            </div>\r\n            <div data-role=\"content\">\r\n                <ul id=\""
    + escapeExpression(((stack1 = depth1.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_Container\" data-role=\"listview\" data-inset=\"true\" data-filter=\"true\">\r\n					";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth1),data:data};
  if (stack2 = helpers.phrases) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.phrases; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.phrases) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </ul>\r\n            </div>\r\n        </div>\r\n";
  return buffer;
  }
function program3(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n						<li><a href=\"#\" class=\"phraseButton\" id=\"phraseButton_"
    + escapeExpression(((stack1 = depth2.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = depth1.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (stack2 = helpers.english) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.english; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\r\n					";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();