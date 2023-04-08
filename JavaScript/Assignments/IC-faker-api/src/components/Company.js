

let compId = 0

const Company = (props) => {
    const { faker } = require('@faker-js/faker');
    const createCompany = () => {
        compId++;
        const newCompany = {
            id: compId,
            name: faker.company.name(),
            address: faker.address.buildingNumber() + ' ' + faker.address.street() + ', ' + 
            faker.address.cityName() + ', ' + faker.address.zipCode() + ' ' + faker.address.country(),
        }
        return newCompany;
    }
    // const newFakeCompany = createCompany();
    // console.log(newFakeCompany);
    
    return (
        <div>

        </div>
    )
}

export default Company;