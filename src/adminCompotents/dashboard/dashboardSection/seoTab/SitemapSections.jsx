import React, { useState } from "react";

const SitemapSections = () => {

  const [alert,setAlert] = useState({
    show:false,
    message:"",
    type:""
  });


  const handleOpenSitemap = ()=>{

    try{

      // frontend domain se open hoga
      window.open("/sitemap.xml","_blank");

      handleSuccess("Sitemap opened successfully");

    }
    catch(err){

      handleError("Failed to open sitemap");

    }

  };


  const handleSuccess = (message)=>{

    setAlert({show:true,message,type:"success"});

    setTimeout(()=>setAlert({show:false,message:"",type:""}),3000);

  };

  const handleError = (message)=>{

    setAlert({show:true,message,type:"error"});

    setTimeout(()=>setAlert({show:false,message:"",type:""}),3000);

  };


  return (

    <div className="p-6 mx-5 mb-20 rounded-xl shadow-md mt-6 bg-white border border-gray-200">

      <h3 className="text-xl font-semibold mb-4">
        Sitemap.xml Viewer
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


      <div className="flex justify-end">

        <button
          onClick={handleOpenSitemap}
          className="px-4 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600"
        >
          View sitemap.xml
        </button>

      </div>

    </div>

  );

};

export default SitemapSections;