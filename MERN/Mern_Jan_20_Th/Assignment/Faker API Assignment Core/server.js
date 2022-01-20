const express = require("express")
const faker = require('@faker-js/faker')

const app = express();
const port = 8000

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/user/new", (req, res) => {
    res.json(new User)
});

app.get("/api/company/new", (req, res) => {
    res.json(new Company)
});

app.get("/api/user/company", (req, res) => {
    res.json({user: new User, company: new Company})
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );