import Jison from 'jison';
import grammar from './grammar';

const parser = new Jison.Parser(grammar);

class LogicEval {
  compileExpression = (expression, extraFunctions /* optional */) => {
    const functions = {
        abs: Math.abs,
        ceil: Math.ceil,
        floor: Math.floor,
        log: Math.log,
        max: Math.max,
        min: Math.min,
        random: Math.random,
        round: Math.round,
        sqrt: Math.sqrt,
    };

    if (extraFunctions) {
        for (var name in extraFunctions) {
            if (extraFunctions.hasOwnProperty(name)) {
                functions[name] = extraFunctions[name];
            }
        }
    }

    const tree = parser.parse(expression);
    const js = [];
    const toJs = (node) => {
      if (Array.isArray(node)) {
          node.forEach(toJs);
      } else {
          js.push(node);
      }
    }
    js.push('return ');
    tree.forEach(toJs);
    js.push(';');

    const unknown = (funcName) => {
        throw 'Unknown function: ' + funcName + '()';
    }

    const prop = (obj, name) => {
        return Object.prototype.hasOwnProperty.call(obj||{}, name) ? obj[name] : undefined;
    }

    const func = new Function('functions', 'data', 'unknown', 'prop', js.join(''));

    return function(data) {
        return func(functions, data, unknown, prop);
    };
  }

  evaluate = (expression) => {
    try {
      const reasoner = this.compileExpression(expression);
      return reasoner() === 1;
    } catch (e){
      return false
    }
  }

  evaluateWithContext = (expression, context) => {
    try {
      const reasoner = this.compileExpression(expression);
      return reasoner(context) === 1;
    } catch (e){
      return false
    }
  }

  validate = (expression) => {
    if (typeof expression !== 'string'){
      return false;
    }

    if (expression.length === 0){
      return false;
    }

    const eitherAndOrOrOrGtOrLtOrE = /&{2}|\|{2}|<|>|={3}/g;
    const bothAndAndOr = /&{2}.*\|{2}|\|{2}.*&{2}/;
    const containEitherAndOrOrOrGtOrLtOrE = expression.match(eitherAndOrOrOrGtOrLtOrE);
    const containWords = expression.match(/\w+/g);

    if (!containWords || !containEitherAndOrOrOrGtOrLtOrE){
      return false;
    }

    if (containWords.length % 2 !== 0){
      return false;
    }

    if (containEitherAndOrOrOrGtOrLtOrE.length % 2 === 0){
      return false;
    }

    try {
      this.compileExpression(expression);
      return true;
    } catch (e){
      return false
    }
  }
}

export default new LogicEval()