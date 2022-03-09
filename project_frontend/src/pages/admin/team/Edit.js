import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

function EditTeam() {

const navigate = useNavigate();

// const [getuserdata, setUserdata] = useState([]);
// console.log(getuserdata);

    const [inpval,setINP] = useState({
        name:"",
        email:"",
        designation:"",
        profileimg:"",
    })

const setdata =(e) =>{
    console.log(e.target.value);

    const {name,value} = e.target;
    setINP((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
}

const {id} =useParams("");
console.log(id);



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
        setINP(data);
        console.log("data received");
    }
}

useEffect(() => {
    getdata();
}, []);

const updateuser = async(e)=>{
e.preventDefault();
    const {name,email,designation,profileimg} = inpval;

    const res2 = await fetch(`http://localhost:8000/updateuser/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,designation,profileimg
        })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422|| !data2){
        alert("fill the data");
    }else{

        alert("data updated");
        navigate("/admin/team");
    }
}

    return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-300 m-10 rounded-md shadow-md">
    <div style={{float:"right"}}>
      <a href='/admin/team'><p className='font-bold'>X</p></a>
    </div>
    <div
                      className="mx-auto mb-6 flex-shrink-0 flex items-center
                     justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0
                      sm:h-10 sm:w-10"
                    >
                    </div>
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Add User</h2>
        
        <form onSubmit={updateuser}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 " for="username">Username</label>
                    <input value={inpval.name} name="name" type="text" onChange={setdata}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 " for="email">Email</label>
                    <input value={inpval.email} name="email" onChange={setdata} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 " for="designation">Designation</label>
                    <input value={inpval.designation} name="designation" onChange={setdata} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 " for="image">Profile Image url</label>
                    <input value={inpval.profileimg} name="profileimg" onChange={setdata} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
                
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
    );
}

export default EditTeam;