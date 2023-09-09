//依赖typeof判断基础数据类型，因为typeof null为object所以特别判断
const typeOfTest = type => thing => typeof thing === type;

//const isBoolean = typeOfTest('boolean');
const isBoolean = thing => thing === true || thing === false;
const isUndefined = typeOfTest('undefined');
const isNull = thing => thing === null;
const isNUmber = typeOfTest('number');
const isBigInt = typeOfTest('bigint');
const isString = typeOfTest('string');
const isFunction = typeOfTest('function');
const isObject = (thing) => thing !== null && typeof thing === 'object';