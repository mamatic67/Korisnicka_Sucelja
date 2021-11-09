import React, { useState } from 'react';
import Image from 'next/image';

const studentsOut = [
    {
        id: 1,
        name: 'Mate',
        lName: 'Matic',
        imgSrc: '/profile.jpg',
    },
    {
        id: 2,
        name: 'Jure',
        lName: 'Juric',
        imgSrc: '/profile.jpg',
    },
];

const Student = ({ name, lName, imgSrc }) => {
    return (
        <li className="flex flex-row relative items-center">
            <section className="mr-5 w-24 mt-5 mb-5 flex-row justify-between flex items-center">
                <p>{name}</p>
                <p>{lName}</p>
            </section>
            <Image
                className="absolute right-3 top-3"
                layout="fixed"
                width="50px"
                height="50px"
                src={imgSrc}
                alt="profile image"
            />
        </li>
    );
};

const StateDemo = () => {
    const [students, setStudents] = useState(studentsOut);
    const [newStudent, setNewStudent] = useState({
        name: '',
        lName: '',
        imgSrc: '/profile.jpg',
    });

    return (
        <main>
            <h1 className="text-center mt-5 mb-5 font-bold text-4xl underline">
                Welcome to state demo!
            </h1>
            <ul className="flex flex-col items-center justify-around">
                {students.map((el) => (
                    <Student key={el.id} {...el} />
                ))}
            </ul>
            <section className="flex flex-col w-64 justify-center items-center my-0 mx-auto border-gray-500">
                <input
                    value={newStudent.name}
                    onChange={(e) =>
                        setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={newStudent.lName}
                    onChange={(e) =>
                        setNewStudent({ ...newStudent, lName: e.target.value })
                    }
                    className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                    type="text"
                    placeholder="Last name"
                />
                <button
                    onClick={() => {
                        setStudents([
                            ...students,
                            {
                                ...newStudent,
                                id: newStudent.name + newStudent.lName,
                            },
                        ]);
                    }}
                    className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                    Submit
                </button>
            </section>
        </main>
    );
};

export default StateDemo;
