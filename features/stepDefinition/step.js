import { Given, When, Then } from '@cucumber/cucumber';
import {setdefaultTimeout} from '@cucumber/cucumber';
setdefaultTimeout(60 * 1000);
Given('Enter {string} and {string}', function (username, password) {
  
 
});
When('add {string} to the cart', function (string) {
 
});

Then('verify {string} is add to the cart', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('valid {string},{string},{string} added', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('checked order confirmation', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
