export default [
  {
    i: "a > 1",
    o: ["a"]
  },
  {
    i: "a > 1 && b < 2",
    o: ["a", "b"]
  },
  {
    i: "a > 1 && b < 2 && c >= 3",
    o: ["a", "b", "c"]
  },
  {
    i: "a > 1 && b < 2 && c >= 3 && d <= 4",
    o: ["a", "b", "c", "d"]
  },
  {
    i: "a > 1 || b < 2 || c >= 3 || d <= 4",
    o: ["a", "b", "c", "d"]
  },
  {
    i: "a > 1 && 2 < b && c >= 3 && 4 <= d",
    o: ["a", "b", "c", "d"]
  }
]