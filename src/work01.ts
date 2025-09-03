interface Employee  {
    id: number;
    name: string;
    position: string;
    salary: number;
};

const employees: Employee[] = [
    {
        id: 1,
        name: "Choi",
        position: "Developer",
        salary: 60000
    },
    {
        id: 2,
        name: "Toy",
        position: "junior Developer",
        salary: 40000
    },
    {
        id: 3,
        name: "Tui",
        position: "Manager",
        salary: 80000
    }
];
function findByName(name: string): Employee | undefined {
    return employees.find(employee => employee.name === name);
}

console.log("พนักงานทั้งหมด")
employees.forEach(emp => {
    console.log(`ID: ${emp.id}, ชื่อ: ${emp.name}, ตำแหน่ง: ${emp.position}, เงินเดือน: ${emp.salary}`);
});

const search = findByName("Tui");
 if (search) {
    console.log(`พบพนักงาน: \nID: ${search.id}, ชื่อ: ${search.name}, ตำแหน่ง: ${search.position}, เงินเดือน: ${search.salary}`);
} else {
    console.log("ไม่พบพนักงาน");
}
