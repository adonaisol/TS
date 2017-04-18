class Person {
    constructor(firstname: string) {
        this.firstname = firstname;
    }
    get firstname() {
        return this.firstname;
    }
    set firstname(value: string) {
        this.firstname = value.toUpperCase();
    }
}
    let person = new Person("Asaad");
    console.log(person.firstname);
