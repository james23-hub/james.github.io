const account = {
  owner: 'John',
  movements: [100, 300, 250, 400],

  get latest() {
    return this.latest.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest(50);
console.log(account.movements);
