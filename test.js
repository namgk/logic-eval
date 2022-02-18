const functions = {}
const unknown = (funcName) => {
  throw 'Unknown function: ' + funcName + '()';
}

function prop(obj, name) {
  console.log(obj, name)
  return Object.prototype.hasOwnProperty.call(obj || {}, name) ? obj[name] : undefined;
}

function func(functions,data,unknown,prop) {
  return (function(o) {
    console.log(o)
    return o ==("1")|| o ==("2"); 
  })(prop(data, "a"));
}

function cal(data) {
  return func(functions, data, unknown, prop);
};

console.log(cal({a: "1"}))