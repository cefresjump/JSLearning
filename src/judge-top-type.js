//依赖Object.prototype.toString来获取数据类型
//可以判断对象的类型，但不能判断对象是否在某个原型链上
const kindOf = (cache => thing => {
  const str = Object.prototype.toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const test = () => {
  const date = new Date();

  class ValidatorClass {
    get [Symbol.toStringTag]() {
      return 'validator';
    }
  }

  const isString = kindOfTest('string');
  const isObject = kindOfTest('object');
  const isDate = kindOfTest('date');
  const isNull = kindOfTest('null');
  const isUndefined = kindOfTest('undefined');
  const isValidator = kindOfTest('validator');


  console.log(isString(1));
  console.log(isDate(date));
  console.log(isObject(date));
  console.log(isNull(null));
  console.log(isUndefined(undefined));
  console.log(isValidator(new ValidatorClass()));
}

test()