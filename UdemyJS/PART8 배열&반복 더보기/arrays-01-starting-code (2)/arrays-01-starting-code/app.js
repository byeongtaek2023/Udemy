// const numbers = [1,2,3]
// console.log(numbers);
// //  (3) [1, 2, 3]
// //   ㄴ배열길이 ㄴ배열

// const moreNumbers = new Array('Hi', 'Welcome!');//[]
// console.log(moreNumbers); 

//  
// console.log(moreNumber)
// //배열은 비어있고 길이는 5라고 나옴 
// //빈 배열인데 크기와 길이가 조절된 형태

// const hobbies = ['cooking', 'sports'];
// const personalData = [30.'max'.charAt{moreDetail:[] }];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for ( const data of alalyticsData) {
//      for( const dataPoints of data)
//      console.log(dataPoints);
// }

// const hobbies = ['sports', 'cooking'];
// hobbies.push('reading');
// hobbies.unshift('loading');
// hobbies.pop();
// console.log(hobbies);


// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// const storedResult = testResults.concat(3.99, 2);
 
// console.log(testResults.slice()); 

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

for (const price of prices) {
    taxAdjustedPrices.push(price*(1+tax));
}
console.log(taxAdjustedPrices);

const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0;)

console.log(sum);

const data = 'new york; 10.99; 2000';

const trasformedDate = data.split(';')