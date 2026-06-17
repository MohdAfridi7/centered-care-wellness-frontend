import React, { useEffect, useState } from "react";
import { getRobotsTxt, updateRobotsTxt } from "../../../../api/seoRoutes";

const RobotsSections = () => {

  const [content,setContent] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  const [alert,setAlert] = useState({
    show:false,
    message:"",
    type:""
  });

  // ================= FETCH =================

  useEffect(()=>{

    const fetchData = async ()=>{

      try{

        setIsLoading(true);
        setError(null);

        const res = await getRobotsTxt();

        setContent(res || "");

      }
      catch(err){

        setError("Failed to fetch robots.txt");

        handleError("Failed to fetch robots.txt");

      }
      finally{
        setIsLoading(false);
      }

    };

    fetchData();

  },[]);

  // ================= UPDATE =================

const handleSubmit = async () => {

  try {

    setIsLoading(true);

    await updateRobotsTxt(content);

    handleSuccess("robots.txt updated successfully");

  }
  catch(err){

    handleError("Failed to update robots.txt");

  }
  finally{
    setIsLoading(false);
  }

};


  // ================= ALERT =================

  const handleSuccess = (message)=>{

    setAlert({show:true,message,type:"success"});

    setTimeout(()=>setAlert({show:false,message:"",type:""}),3000);

  };

  const handleError = (message)=>{

    setAlert({show:true,message,type:"error"});

    setTimeout(()=>setAlert({show:false,message:"",type:""}),3000);

  };


  return (

 <>
    {/* <div className="p-6 mx-5 rounded-xl shadow-md mt-6 bg-white border border-gray-200">

      <h3 className="text-xl font-semibold mb-4">
        robots.txt Editor
      </h3>


      {alert.show && (

        <div className={`fixed bottom-5 right-5 p-4 rounded ${
          alert.type==="success"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>

          {alert.message}

        </div>

      )}


      {isLoading ? (

        <div className="text-center p-6">
          Loading...
        </div>

      ) : error ? (

        <div className="text-red-500 text-center">
          {error}
        </div>

      ) : (

        <div className="space-y-4">

          <textarea
            className="w-full h-96 font-mono text-sm resize-none rounded-md border border-gray-300 p-3"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder="Enter robots.txt content..."
          />

          <div className="flex justify-end">

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-4 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              {isLoading ? "Saving..." : "Save"}

            </button>

          </div>

        </div>

      )}

    </div> */}
 </>

  );

};

export default RobotsSections;