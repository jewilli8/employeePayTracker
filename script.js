// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
   //Gets user input to create and returns an array of employee objects
  //Create employee object
  
 ;
  const employeesArray = [];
  let addEmployee = true;
  while (addEmployee){
    let firstName = window.prompt("Enter first name: ");
      if(firstName ===""){
      firstName = window.prompt("Enter a valid first name: ")
    }
    let lastName = window.prompt("Enter last name: ");
      if (lastName === ""){
         lastName = window.prompt("Enter a valid last name: ")
      }
    let salary = window.prompt("Enter Salary: ");
    if (isNaN(salary)){
         let salary = window.prompt("Please enter a valid salary: ");
    }
    const employee = {
      firstName: "Joe",
      lastName: "Williams",
      salary: 40000000
    }
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employeesArray.push(employee);
      addEmployee = window.confirm("Would you like to add another employee?" );
      
      
      
  }
 
  return employeesArray;
}




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculates and display the average salary
  let numEmployees = employeesArray.length;
  let totalPayroll = 0;
  
  for (let employee of employeesArray){
    totalPayroll += parseInt(employee.salary)
  }
  let averageSalary = Math.round(totalPayroll / numEmployees);
  console.log(`The average employee salary between our ${numEmployees} employees is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //Selects and displays a random employee
  
  
let randomNum = Math.floor(Math.random() * employeesArray.length);
  
  let randoEmployeeArray = employeesArray[randomNum];
  let randoEmployee = randoEmployeeArray.firstName + " " + randoEmployeeArray.lastName;
 
  console.log(`Congratulations to ${randoEmployee}, our random drawing winner!`)
 
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
