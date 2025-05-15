function generateEmployeeList(employees) {
    const employeeList = [];

    for (const employeeName of employees) {
      const personalNum = employeeName.length;
      const employee = {
        name: employeeName,
        personalNumber: personalNum,
      };
      employeeList.push(employee);
    }

    for (const employee of employeeList) {
      console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNumber}`);
    }
  }

const employees = ["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"];
generateEmployeeList(employees);
