// test for the function /common/utils.js
import catAccessories from '../data/cat-lifestyle.js';
import { findById, calcLineItem, calcOrderItem } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('calculate line item', assert => {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const price = 29.99;
    const expected = 59.98;
    //Act 
    // Call the function you're testing and set the result to a const
    const lineItemTotal = calcLineItem(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(lineItemTotal, expected);
});

test('find cat item by id', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'catBed';
    const expected = 'catBed';
    //Act 
    // Call the function you're testing and set the result to a const
    const catAccessoriesItemFound = findById(id, catAccessories);
    //Assert
    // Make assertions about what is expected valid result

    // assert.ok evaluates if a given expression is true or not
    assert.ok(catAccessoriesItemFound);
    // assert.eual evaluates if given expressions are equal or not
    assert.equal(catAccessoriesItemFound.id, expected);
});

test('find cat item by id returns null unless found', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'not found';
    const expected = null;
    //Act 
    // Call the function you're testing and set the result to a const
    const catAccessoriesItemFound = findById(id, catAccessories);
    //Assert
    // Make assertions about what is expected valid result

    // assert.eual evaluates if given expressions are equal or not
    assert.equal(catAccessoriesItemFound, expected);
});

test('calculate the cart order total', assert => {
    //Arrange
    // Set up your parameters and expectations
    const cart = [
        { id: 'catBed', quantity: 2 }, 
        { id: 'catHammock', quantity: 1 }, 
        { id: 'catFuzz', quantity: 1 }];
    const expected = '$ ' + 156.97;
    //Act 
    // Call the function you're testing and set the result to a const
    const orderTotal = calcOrderItem(cart, catAccessories);

    //Assert
    // Make assertions about what is expected valid result

    // assert.eual evaluates if given expressions are equal or not
    assert.equal(orderTotal, expected);
});
 