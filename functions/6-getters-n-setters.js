const person = {
    firstName:'Milyn',
    lastName:'DSilva',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts=value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Mohan Smith';
// ^ wont work

//getters => access properties

//setters => change (mutate) them

console.log(person);