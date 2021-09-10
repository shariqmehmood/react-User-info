import React from "react";

        function Userinfo({username,orginisation,digistnation,institute,course}){
            return(
                <div>
                    <h1>{username}</h1>
  
                    {
                        orginisation ?
                        (
                            <div>
                                <h2>orginsation:{orginisation}</h2>
                                <h2>digistnation:{digistnation}</h2>

                            </div>

                        ):
                        (
                            <div>

                            <h2>institute:{institute}</h2>
                            <h2>Course:{course}</h2>

                            </div>
                        )
                    }

                   
                </div>
            )

}






export default Userinfo;