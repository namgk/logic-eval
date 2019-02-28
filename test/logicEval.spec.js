import { expect } from 'chai';
import logicEval from '../src/logicEval';
import logicExpressionTestData from './logicExpressionTestData';
import logicExpressionWithContextTestData from './logicExpressionWithContextTestData';
import expressionValidationTestData from './expressionValidationTestData';

describe("logic expression validation", () => {
  expressionValidationTestData.forEach(
    test => {
      it("validating expression: " + test.i + ", expect output: " + test.o, () => {
        const expression = test.i;
        const result = logicEval.validate(expression);
        expect(result).to.equal(test.o);
      });
    }
  )
});

describe("logic expression evaluation", () => {
  logicExpressionTestData.forEach(
    test => {
      it("evaluating expression: " + test.i + ", expect output: " + test.o, () => {
        const expression = test.i;
        const result = logicEval.evaluate(expression);
        expect(result).to.equal(test.o);
      });
    }
  )
});

describe("logic expression evaluation with context", () => {
  logicExpressionWithContextTestData.forEach(
    test => {
      it("evaluating input: " + JSON.stringify(test.i) + ", expect output: " + test.o, () => {
        const { expression, context } = test.i;
        const result = logicEval.evaluateWithContext(expression, context);
        expect(result).to.equal(test.o);
      });
    }
  )
});