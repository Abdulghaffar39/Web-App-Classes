// Connection Events
// Jab MongoDB ke connection ke sath kuch hota hai (jaise disconnect hona), to wo ek “event” bhejta hai, taake hum uske hisaab se kuch action le saken.

// EventEmitter kya hota hai?
// Node.js mein EventEmitter ek class hoti hai (jo events module mein milti hai) jiska kaam hota hai events ko handle karna — yani ke jab koi “waqiya” (event) hota hai, to aap us par kuch action le sakte ho.

// Emit ka matlab kya hai?
// “Emit” ka matlab hota hai event ko trigger karna ya bhejna.

// Inheritance ka matlab kya hai?
// “Inherit” ka matlab hota hai kisi class ke features ko doosri class mein use karna

// Example
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener (sunne wala)
emitter.on('greeting', () => {
  console.log('Hello from EventEmitter!');
});

// Emit (bhejna)
emitter.emit('greeting');
// ---------------------------------------------------------------------------------------------------

mongoose.connection.on('connected', () => console.log('connected'));

// Jab Mongoose ka connection MongoDB server se successfully ban jaye, tab ek event “connected” emit hoti hai — aur tab ye code chalega jo console.log('connected') likha hai.


connection	
// MongoDB se link banane wala object

.on()	
// Event ko sunne wala function

'connected'	
// Event ka naam

(  () => console.log('connected')  )	
// Event hone par chalne wala code

// ---------------------------------------------------------------------------------------------------

// Dotenv kya hai?
// Ye aapko allow karta hai ke aap apne secret data (jaise passwords, API keys, database URLs) ek .env file mein rakho — taake wo code ke andar directly na likhna pade.

// ---------------------------------------------------------------------------------------------------


