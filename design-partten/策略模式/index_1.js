/** 第二种策略模式 */
const strategies = {
    noEmpty: (value, errMsg) => {
        if (!value) return errMsg ? errMsg : '当前项不能为空值'
    },
    maxLength: (...args) => {
        let [value, length, errMsg] = [...args];
        if (!value.length) return new Error('当前项不能为空值');
        if (value.length < length) return errMsg;
    }
}
function Validator2 (strategies) {
    this.strategies = strategies;
    this.cacheRules = [];
}
Validator2.prototype.addRules = (dom, rules) => {
    rules.forEach(elem => {
        this.cacheRules.push(() => {
            let arr = elem.rule.split(':');
            let name = arr.shift();
            let value = dom.value;
            return this.strategies[name].apply(dom, [value, ...arr, elem.errMsg])
        })
    });
}
Validator2.prototype.execValidator = () => {
    for (var i = 0, fn; i < this.cacheRules.length; i++) {
        fn = this.cacheRules[i];
        const errMsg = fn();
        if (errMsg) {
            return errMsg
        }
    }
}
const validator = new Validator2(strategies);
export default validator;