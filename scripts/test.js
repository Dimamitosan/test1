const qwe = {};
function serv(id, value, count) {
  this.id = id;
  this.value = value;
  this.count = count;
}
const eee = new serv('asd', 1, 2);
console.log(eee);
qwe.eee = eee;
const www = new serv('fff', 4, 1);
qwe.www = www;
console.log(qwe.www.value);
console.log(qwe);
