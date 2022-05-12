import React from "react";

// import { sendInvitationToAllCompanies } from "../../../api";
import { fetchAllCompaniesDeafultMail, sendInvitationToAllCompanies} from "../../../api";
import { useEffect, useState } from "react";
import {Table} from "reactstrap";
import { useNavigate } from "react-router";




 const Invites =   () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const loadPost = async () => {

         
          setLoading(true);


          console.log("Before Response");

          
          const response = await fetchAllCompaniesDeafultMail();
          console.log(response)

          console.log("After Response")

         
          setPosts(response.data);

         
          setLoading(false);
      }

    
      loadPost();
  }, []);

  async function clickFunction(){
    
    const result= await sendInvitationToAllCompanies();
    
    console.log(result);
   
  }
 
console.log(posts);  
  return (
    <>
         {loading ? (
                    <h4>Loading...</h4>) :
                    (posts.map((item) =>
                      
                        <h4 key={item[0]}>{item}</h4>)
                    )
                }
    <button onClick={clickFunction}>Send Mail to default Companies</button>
    <button onClick={()=>Navigate('/invite')}>Send A Customized Mail</button>
 

  </>
  )
};

export default Invites;
