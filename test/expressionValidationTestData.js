export default [
  {
    i: {},
    o: false // expression should be a string
  },
  {
    i: 23,
    o: false // expression should be a string
  },
  {
    i: "",
    o: false // empty expression
  },
  {
    i: "%^&*(",
    o: false // expression should only contain [a-z][0-9] && and ||
  },
  {
    i: "&&",
    o: false
  },
  {
    i: "||",
    o: false
  },
  {
    i: "||&&",
    o: false
  },
  {
    i: "|&",
    o: false 
  },
  {
    i: "ab",
    o: false // either && or || has to present
  },
  {
    i: "a > 20 && b === 1 || x",
    o: false // either && or ||, not both
  },
  {
    i: "a > 20 && b === 1 | x",
    o: false // single |
  },
  {
    i: "(a > 20 && b === 1) || x === 2",
    o: false // () not supported
  },
  {
    i: "blah &&",
    o: false // open &&
  },
  {
    i: "blah ||",
    o: false // open ||
  },
  {
    i: "a = 1",
    o: false // single =
  },
  {
    i: "a === 1 & b === 2",
    o: false // single &
  },
  {
    i: "a > 2 | b < 1",
    o: false // single |
  },
  {
    i: "&& blah ||",
    o: false
  },
  {
    i: "&& blah && bahl",
    o: false
  },
  {
    i: "&& blah",
    o: false
  },
  {
    i: "a > 20",
    o: true
  },
  {
    i: "a > 20 && b === 1",
    o: true
  },
  {
    i: "a > 20 && b == 1",
    o: false // strict type equal
  }
]