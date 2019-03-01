## Usage:

    import logicEval from 'logic-eval';

    const expression = "id >= 1 && hour % 2 === 0";
    const context = { id: 5, hour: 6 };
    const result = logicEval.evaluateWithContext(expression, context);
    
    // result should be true