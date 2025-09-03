class Course {
    courseName: string;
    grade: number;

    constructor(courseName: string, grade: number) {
        this.courseName = courseName;
        this.grade = grade;
    }
}

class Student {
    studentID: number;
    name: string;
    courses: Course[];


    constructor(studentID: number, name: string, courses: Course[]) {
        this.studentID = studentID;
        this.name = name;
        this.courses = courses;
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    getAverage(): number {
        if (this.courses.length === 0) return 0;
        const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
        return total / this.courses.length;
    }

    showInfo(): void {
        console.log(`\nStudent ID: ${this.studentID}, Name: ${this.name}`);
        this.courses.forEach((c, index) => {
            console.log(`วิชา:${index + 1}: ${c.courseName}, เกรด: ${c.grade}`);
        });
        console.log(`เกรดเฉลี่ยรวม: ${this.getAverage().toFixed(2)}`);
    }
}


const student1 = new Student(
    6704101420, "Choi", [
    new Course("database", 2.50),
    new Course("programming", 3.75),
    new Course("english", 4.00),
    new Course("science for life", 4.00),
]);

const student2 = new Student(
    6704101421, "Toy", [
    new Course("database", 2.50),
    new Course("programming", 3.50),
    new Course("english", 3.75),
    new Course("science for life", 3.00),
]);

const student3 = new Student(
    6704101422, "Tui", [
    new Course("database", 2.50),
    new Course("programming", 3.50),
    new Course("english", 4.00),
    new Course("science for life", 3.25),
]);


console.log("ข้อมูลนักศึกษาทั้งหมด:");
student1.showInfo();
student2.showInfo();
student3.showInfo();

student1.addCourse(new Course("Web Development", 4.0));
student2.addCourse(new Course("Web Development", 4.0));
student3.addCourse(new Course("Web Development", 4.0));

console.log("\nข้อมูลนักศึกษาทั้งหมด (หลังเพิ่มรายวิชา):");
student1.showInfo();
student2.showInfo();
student3.showInfo();
