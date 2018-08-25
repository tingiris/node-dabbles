class Person {
  constructor (firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getFullName () {
    return this.firstName + ' ' + this.lastName;
  }
}
