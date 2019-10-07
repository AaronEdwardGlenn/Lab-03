// IMPORT MODULES under test here:
import compare from '../compare.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('tie results from comp and player both throwing rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'rock'; 
    const personG = 'rock'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(compG, personG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'TIE!');
});

test('loss results from comp throwing paper and person throwing rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'paper'; 
    const personG = 'rock'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(personG, compG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});

test('win results from person throwing paper and comp throwing rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'rock'; 
    const personG = 'paper'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(compG, personG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});

test('loss results from person throwing paper and comp throwing scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'scissors'; 
    const personG = 'paper'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(personG, compG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});


test('win results from comp throwing paper and person throwing scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'paper'; 
    const personG = 'scissors'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(personG, compG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'WIN!');
});

test('loss results from comp throwing rock and person throwing scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'rock'; 
    const personG = 'scissors'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(personG, compG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});