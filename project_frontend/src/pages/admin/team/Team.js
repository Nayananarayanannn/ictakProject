import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Addteam from "./Addteam";
import Details from "./Details";
import EditTeam from "./Edit";


function Team() {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async (e) => {

        const res = await fetch("http://localhost:8000/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error");
        } else {
            setUserdata(data);
            console.log("data received");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {
        const res2 = await fetch(`http://localhost:8000/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            alert("user deleted");
            console.log("user deleted");
            getdata();
        }

    }
    

    return (
        <div>
        
            <div className="container mx-auto px-4">
                <div className="py-8">
                    <div className="flex flex-row mb-1 justify-between w-full">
                        
                        <h2 className="text-2xl leading-tight">Our Team</h2>
                        <div className="text-end">
                            <NavLink
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                                type="submit" to="/admin/team/Addteam"
                            >
                                Add Member
                            </NavLink>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-auto" style={{maxHeight:"80vh"}}>
                            <table className="min-w-full leading-normal overflow-auto">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                                        >
                                            User
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                                        >
                                            status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getuserdata.map((element, id) => {
                                            return (

                                                <tr>
                                                    <td
                                                        scope="col"
                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                                                    >
                                                        {id + 1}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <a href="#" className="block relative">
                                                                    <img
                                                                        alt="profil"
                                                                        src={element.profileimg}
                                                                        className="mx-auto object-cover rounded-full h-20 w-20 "
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {element.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{element.designation}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {element.email}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span
                                                                aria-hidden="true"
                                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                            ></span>
                                                            <span className="relative">active</span>
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-5 flex justify-between whitespace-no-wrap flex-shrink-0">
                                                        <NavLink to={`/admin/team/view/${element._id}`}>
                                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 border border-green-700 rounded">
                                                                <svg
                                                                    width="22"
                                                                    fill="currentColor"
                                                                    height="22"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </NavLink>
                                                        <NavLink to={`/admin/team/edit/${element._id}`}>
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded">
                                                                <svg
                                                                    width="22"
                                                                    fill="currentColor"
                                                                    height="22"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </NavLink>

                                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-700 rounded" onClick={() => deleteuser(element._id)}>
                                                            <svg
                                                                width="22"
                                                                fill="currentColor"
                                                                height="22"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                                                                />
                                                            </svg>
                                                        </button>


                                                    </td>
                                                </tr>

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
