interface Todo {
name: string;
age: number;
completed: boolean;
}

const stuff = {
    name: "ben",
    age: 24,
    completed: true
}

const testFunc = (data: Todo) => {
 console.log(data);
}

testFunc(stuff);


const today = new Date();

export {}