

/** 策略模式1 */

const strategyMap = {
    maxLength: "最大长度不能超过",
    minLength: '最小长度不能小于3',
    required: '请输入对应的选项',
    email: '请输入正确的邮箱账号'
}
const strategy = {
    maxLength: (val, errorMsg) => {
        if (val > 8) {
            console.log(strategyMap['maxLength'])
            return errorMsg || strategyMap['maxLength'];
        }
    },
    minLength: (val, errorMsg) => {
        if (val < 3) {
            return errorMsg || strategyMap['minLength'];
        }
    },
    required: (val, errorMsg) => {
        if (!val) {
            return errorMsg || strategyMap['required'];
        }
    },
    email: (val, errorMsg) => {
        if (!/\d+/.test(val)) {
            return errorMsg || strategyMap['email'];
        }
    }
}
function Validator () {
    this.rules = [];
}
Validator.prototype.add = function (val, rule, msg) {
    let arr = [val, msg];
    this.rules.push(strategy[rule].apply(this, arr));
}
Validator.prototype.start = function () {
    for (var i = 0; i < this.rules.length; i++) {
        this.rules[i]();
    }
}
const demo = new Validator();
demo.add(12, 'maxLength', '');


