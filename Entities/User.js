class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getData() {
    return {
      name: this.name,
      email: this.email
    };
  }
}

module.exports = User;