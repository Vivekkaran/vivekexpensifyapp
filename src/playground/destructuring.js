/* const person = {
  name: 'Vivek',
  age: 26,
  location: {
    city: 'Halifax',
    temp: 88
  }
}

const { name: firstName = 'Anonymous', age } = person

console.log(`${firstName} is ${age}`)

const { city, temp: temperature } = person.location

if(city && temperature) console.log(`It's ${temperature} in ${city}`)
else console.log('No city and temp found') */

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publishername = 'Self-Publish'} = book.publisher
console.log(publishername ) 

const address = [ '1222 Donnovan Street', 'Philadelphia', 'PA', 13421 ]
const [ street, city, state = 'Bahamas', zip ] = address

console.log(`${city} is in ${state}`)

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , rate1] = items

console.log(`A medium ${coffee} costs ${rate1}`)