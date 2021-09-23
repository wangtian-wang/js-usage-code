/**
 发布订阅模式 有三个类 
 房产中介   订阅 哪些房东出租房屋                 发布 给租房者 房屋信息
 房东      负责发布新房源                       通知房产中介 发布出租信息
 租客      负责订阅那个房东发布了租房信息         通知房产中介  发布租房信息

 关系： 一（发布者 ）对 多（订阅者） 的关系
 keypoint：  1： 先订阅 再发布  2： 决定谁是发布者 谁是订阅者


 缺点： 对于新手来说不太友好

 */
class Agent {
  constructor() {
    this._event = {};
  }
  subscribe(type, listener) {
    let listeners = this._event[type];
    if (!listeners) {
      this._event[type] = [listener];
    } else {
      this._event[type].push(listener);
    }
  }
  publish(type) {
    let listeners = this._event[type];
    let argus = Array.from(arguments).slice(1);
    listeners.forEach((item) => {
      item(...argus);
    });
  }
}
class LandLoad {
  constructor(name) {
    this.name = name;
  }
  lend(agent, area, money) {
    agent.publish("house", area, money);
  }
}
class Tenant {
  constructor(name) {
    this.name = name;
  }
  rent(agent) {
    agent.subscribe("house", (area, money) => {
      console.log(`${this.name}:${area} :${money}rmb`);
    });
  }
}
let agent = new Agent();
let t1 = new Tenant("peter");
let t2 = new Tenant("rose");
let L1 = new LandLoad("minre");

t1.rent(agent);
t2.rent(agent);

L1.lend(agent, 60, 4000);
