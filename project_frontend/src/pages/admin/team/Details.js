import React,{useState,useEffect} from 'react';
import { useNavigate, NavLink, useParams } from 'react-router-dom';

function Details(props) {

    const navigate = useNavigate();

    const {id} =useParams("");
    console.log(id);

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async()=>{
    
        const res = await fetch(`http://localhost:8000/getuser/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            
        });
    
        const data = await res.json();
        console.log(data);
    
        if(res.status===422||!data){
            console.log("error");
        }else{
            setUserdata(data);
            console.log("data received");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async(id)=>{
        const res2 = await fetch(`http://localhost:8000/deleteuser/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },

        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if(res2.status === 422||!deletedata){
            console.log("error");
        }else{
            alert("user deleted");
            console.log("user deleted");
            navigate("/admin/team");
        }
        
    }

    return (

        <section className="bg-white ">
        <div
                      className="mx-auto mb-6 flex-shrink-0 flex items-center
                     justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0
                      sm:h-10 sm:w-10"
                    >
                    </div>
            <div className="container px-6 py-4 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 ">{getuserdata.name}</h2>
                        <h5 className="text-1xl font-bold text-gray-800 ">{getuserdata.designation}</h5>
                        
                        <p className="mt-2 text-gray-500 dark:text-gray-400 lg:max-w-md">
                          email: {getuserdata.email}  
                        </p>

                        <div className="flex items-center mt-6 -mx-2">
                            <a className="mx-2" href="#" aria-label="Twitter">
                                <svg className="w-5 h-5 text-gray-700 fill-current hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                                </svg>
                            </a>

                            <a className="mx-2" href="#" aria-label="Facebook">
                                <svg className="w-5 h-5 text-gray-700 fill-current  hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                                </svg>
                            </a>

                            <a className="mx-2" href="#" aria-label="Github">
                                <svg className="w-5 h-5 text-gray-700 fill-current  hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:w-1/2">
                        <div className="flex justify-end mb-2">
                            <NavLink to={`/admin/team/edit/${getuserdata._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 mx-2 border border-blue-700 rounded">
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
                           
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-700 rounded" onClick={()=>deleteuser(getuserdata._id)}>
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
                         
                           
                        </div>
                        <div className="flex items-center justify-center lg:justify-center">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-full h-64 rounded-md shadow-2xl" src={getuserdata.profileimg} alt="" />
                            </div>

                        </div>
                        <div className="flex justify-end mt-6">
                <a href='/admin/team'><button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Close</button></a>
            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;