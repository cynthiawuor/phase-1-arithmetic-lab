//Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

//NB: Use KRA, NHIF, and NSSF values provided in the link below.

function calculatePayeeTax(salary) {
    var Payee
    if (salary <= 24000) {

        Payee = 0.1 * salary
    }
    if (salary >= 24001 && salary <= 32333) {

        Payee = 0.25 * salary
    }
    if (salary >= 32333) {

        Payee = 0.3 * salary
    }
return Payee
}

console.log("payee; ", calculatePayeeTax(40000))
