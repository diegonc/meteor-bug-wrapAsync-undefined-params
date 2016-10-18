import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

function async_function (a, b, callback) {
  console.log ({a, b, callback});
  return callback(null, a + b);
}

const sync_function = Meteor.wrapAsync(async_function);

console.log("res: ", sync_function(3, 4)); /* {a: 3, b: 4, callback: Function} */
try {
console.log("res: ", sync_function(3, undefined)); /* {a: 3, b: Function, callback: undefined} */
} catch (e) { console.log("e: ", e); }
try {
console.log("res: ", sync_function(undefined, undefined)); /* {a: Function, b: undefined, callback: undefined} */
} catch (e) { console.log("e: ", e); }
