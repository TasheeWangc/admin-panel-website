import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");

   return (
     <div className="new">
       <Sidebar />
       <div className="newContainer">
                 <Navbar />
         <div className="top">
            <h1>Add Project</h1>
         </div>
         <div className="bottom"></div>
         </div>
       </div>  
          
   );
};

