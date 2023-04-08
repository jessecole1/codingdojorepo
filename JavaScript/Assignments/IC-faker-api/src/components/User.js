import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


let userId = 0

const User = (props) => {

    const [theUser, setTheUser] = useState([]);

    const { faker } = require('@faker-js/faker');
    const createUser = () => {
        userId++;
        const newUser = {
            id: userId,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phoneNumber: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        return newUser;
    }

    const [user, setNewUser] = useState([]);

    const Tuser = (props) => {
        // useEffect(() => {
        //     const testUser = createUser();
        //     setTheUser(testUser);
        //     console.log(testUser);
        // }, []);
        const testUser = createUser();
        setTheUser(testUser);
        console.log(testUser);
        return (
            <div>
                <p>{user.firstName}</p>
            </div>
        )

    }

    // const newFakeUser = createUser();
    // console.log(newFakeUser);
    // console.log(newFakeUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/api/users/new" element={<Tuser/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default User;