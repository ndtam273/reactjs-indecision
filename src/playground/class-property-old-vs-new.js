class OldSyntax {
    constructor() {
        this.name = 'Tam';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi.My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;

class NewSyntax {
    name = 'Ly';
    getGreeting = () => {
        return `My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;