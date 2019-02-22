class LogicEval {
  evaluate = (expression) => {
    if (!this.validate(expression)){
      return null;
    }

    const result = eval(expression) || false;
    return result;
  }

  evaluateWithContext = (expression, context) => {
    if (!this.validate(expression)){
      return false;
    }
    if (typeof context !== 'object'){
      return false;
    }

    const contextNames = Object.keys(context);
    const contextValues = Object.values(context);

    if (expression.indexOf("&&") > -1){
      // if any of the context within expression is not available in contextName, always return false
      const contextNamesInExpression = this.extractContextNames(expression);
      if (contextNamesInExpression.some(name => !contextNames.includes(name))){
        return false;
      }
    }

    if (expression.indexOf("||") > -1){
      // ignore any of the context within expression that is not available in contextName
      const contextNamesInExpression = this.extractContextNames(expression);
      if (contextNamesInExpression.some(name => !contextNames.includes(name))){
        // ignore this contextName in the evaluation: remove it from the expression, or set it with a value that always resolves to false
      }
    }

    const reasoner = new Function(contextNames, 'return ' + expression);

    try {
      return reasoner.apply(null, contextValues);
    } catch (e){
      console.log(e)
      return false;
    }
  }

  extractContextNames = (expression) => {
    const results = [];
    return results;
  }

  validate = (expression) => {
    if (typeof expression !== 'string'){
      return false;
    }

    if (expression.length === 0){
      return false;
    }

    const invalidCharacters = /[^a-zA-Z0-9_&|\s<>=]/g;
    const eitherAndOrOrOrGtOrLtOrE = /&{2}|\|{2}|<|>|={3}/g;
    const bothAndAndOr = /&{2}.*\|{2}|\|{2}.*&{2}/;
    const containInvalidCharacters = expression.match(invalidCharacters);
    const containBothAndAndOr = expression.match(bothAndAndOr);
    const containEitherAndOrOrOrGtOrLtOrE = expression.match(eitherAndOrOrOrGtOrLtOrE);
    const containWords = expression.match(/\w+/g);

    if (containInvalidCharacters || containBothAndAndOr || !containWords || !containEitherAndOrOrOrGtOrLtOrE){
      return false;
    }

    if (containWords.length % 2 !== 0){
      return false;
    }

    if (containEitherAndOrOrOrGtOrLtOrE.length % 2 === 0){
      return false;
    }

    return true;
  }
}

export default new LogicEval()