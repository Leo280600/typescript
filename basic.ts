const username: string = "attawit"; 

const quantity: number = 5; 

const isAdmin: boolean = false; 

 

const ids: string[] = ["u1", "u2", "u3"];       // basic array 

const prices: Array<number> = [100, 200, 300];  // generic array 

 

// Tuple (เช่นพิกัด หรือคู่ค่า key-value) 

const point: [number, number] = [10, 20]; 

const points: Array<[number, number]> = [ 

  [10, 20], 

  [30, 40], 

  [50, 60], 

]; 

 

// Object  

type User = { 

  id: string; 

  name: string; 

  email?: string;   // ‘?’ = optional 

}; 

 

const u: User = { id: "u1", name: "Ann" }; 

const users: Array<User> = [ 

  { id: "u1", name: "Ann" }, 

  { id: "u2", name: "Bob", email: "bob@example.com" }, 

  { id: "u3", name: "Charlie" }, ]