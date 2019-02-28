export default [
  {
    i: {
      expression: "temperature > 20",
      context: 25
    },
    o: false // context should be an object
  },
  {
    i: {
      expression: "temperature > 20",
      context: "xx"
    },
    o: false // context should be an object
  },
  {
    i: {
      expression: "temperature > 20",
      context: {
        temperature: 25
      }
    },
    o: true
  },
  {
    i: {
      expression: "temperature > 20",
      context: {
      }
    },
    o: false // empty context
  },
  {
    i: {
      expression: "temperature > 20",
      context: {
        id: 25
      }
    },
    o: false // context not available for expression
  },
  {
    i: {
      expression: "id >= 1 && temperature > 20",
      context: {
        id: 15,
      }
    },
    o: false // context not available for expression
  },
  {
    i: {
      expression: "id >= 1 && temperature > 20",
      context: {
        temperature: 15,
        id: 1
      }
    },
    o: false
  },
  {
    i: {
      expression: "id >= 1 || temperature > 20",
      context: {
        id: 15,
      }
    },
    o: true
  },
  {
    i: {
      expression: "id >= 1 || temperature > 20",
      context: {
        temperature: 25,
      }
    },
    o: true
  },
  {
    i: {
      expression: "id >= 1 && hour % 2 === 0",
      context: {
        id: 25,
        hour: 6,
      }
    },
    o: true
  },
  {
    i: {
      expression: "id >= 1 && hour % 2 === 0",
      context: {
        id: 25,
        hour: 7,
      }
    },
    o: false
  },
  {
    i: {
      expression: "id >= 1 || hour % 2 === 0",
      context: {
        id: 25,
        hour: 6,
      }
    },
    o: true
  },
  {
    i: {
      expression: "id >= 1 || temperature > 20",
      context: {
        afa: 25,
      }
    },
    o: false
  },
  {
    i: {
      expression: "|| temperature > 20",
      context: {
        afa: 25,
      }
    },
    o: false
  },
  {
    i: {
      expression: "id >= 1 && temperature > 20",
      context: {
        temperature: 15,
        id: 1,
        latitude: 49.222222
      }
    },
    o: false // not satisfied
  }
]