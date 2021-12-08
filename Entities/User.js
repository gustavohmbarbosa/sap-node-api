class User {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
  }

  getData() {
    return {
      name: this.name,
      email: this.email
    };
  }
}

module.exports = User;