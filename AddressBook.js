// Address Book

// Custom Person object contructor
function Person (firstName, lastName, phoneNumber, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
}

// Some persons
var john = new Person('John', 'Jones', '(650) 555-5555', 'john.jones@example.com');
var mike = new Person('Mike', 'Jones', '(650) 333-3333', 'mike.jones@example.com');
var mary = new Person('Mary', 'Johnson', '(650) 222-2222', 'mary.johnson@example.com');
var bob = new Person('Bob', 'Johnson', '(650) 444-4444', 'bob.johnson@example.com');

// Contacts list
var contacts = [john, mike, mary, bob];

// Function for displaying persons
function printPerson(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

// Function to list every person in Address Book
function list() {
  var contactsLength = contacts.length;
  console.log("Address Book:");
    for (var i = 0; i < contactsLength; i++) {
      printPerson(contacts[i]);
    }
}
list();

// Function to search for persons by their lastName in Address Book
var search = function (lastName) {
  var contactsLength = contacts.length;
  console.log('Search results for "' + lastName + '":');
    for (var i = 0; i < contactsLength; i++) {
      if (lastName === contacts[i].lastName) {
    	  printPerson(contacts[i]);
      }
    }
};
search('Jones');

// Function to add new person to Address Book
var add = function (firstName, lastName, phoneNumber, email) {
  contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
  };
  console.log('Newly added contact:');
  printPerson(contacts[contacts.length - 1]);
};
add('Susan', "Miller", '(650) 111-1111', 'susan.miler@example.com');

// List every person once again (including newly added contacts)
list();
