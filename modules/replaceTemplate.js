// const total = require('../index.js');
// console.log(total)

module.exports = (htmlStr, course, total)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%CUSTOMERNAME%}/g, course.customerName);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%PHONENUMBER%}/g, course.phoneNumber);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%LOANTERMYEARS%}/g, course.loanTermYears);
    output = output.replace(/{%TOTAL%}/g, total);
    return output;
}