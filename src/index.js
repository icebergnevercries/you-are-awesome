// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    let symbol = Symbol(propertyName);

    return symbol;
};
const createProtoMagicObject = () => {

    let fun = function(){
        fun.name = 'Den';
    };

    fun.__proto__ = fun.prototype;

    return fun;
};
const incrementor = () => {
    incrementor.incrementvalue = incrementor.incrementvalue ? incrementor.incrementvalue : 0;

    let increment = function(){
        incrementor.incrementvalue += 1;
        return increment;
    }

    increment.valueOf = function(){
        incrementor.incrementvalue += 1;
        return incrementor.incrementvalue;
    }

    return increment;
};
const asyncIncrementor = () => {
    asyncIncrementor.asyncincrementvalue = asyncIncrementor.asyncincrementvalue ? asyncIncrementor.asyncincrementvalue : 0;

    asyncIncrementor.asyncincrementvalue += 1;

    return asyncIncrementor.asyncincrementvalue;
};
const createIncrementer = () => {

    let increment = function*(){
        createIncrementer.incvalue = 0;
        while(true){
            yield createIncrementer.incvalue += 1;
        }              
    }

    return increment();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {

    let mypromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(param);
        }, 1000);
    });

    return mypromise;
};
const getDeepPropertiesCount = (obj) => {  

    let funCount = (obj) => {
        let count = 0;
        for(var o in obj){
            count++;
            if(Object.keys(obj[o]).length > 0){
                count += funCount(obj[o]);    
            }
        }
        return count;
    }

    return funCount(obj);    
};
const createSerializedObject = () => {
    return new String({'name' : 'Den'});
};
const toBuffer = () => {};
const sortByProto = (array) => {

    return array.sort(function(a,b){
        for(var key in b){
            if(a[key] != b[key]){
                return 1;
            }
            else{
                return -1;
            }
        }
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;