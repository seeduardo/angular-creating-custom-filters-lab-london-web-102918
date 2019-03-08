function city() {
  return (contacts, city) => {
    return contacts.filter(contact => {
      return contact.location.city === city
    })
  }
}

angular
  .module('app')
  .filter('city', city)
