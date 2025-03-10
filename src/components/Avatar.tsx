import React from "react";

const Avatar = () => {
  return (
    <div className="rounded-full overflow-hidden aspect-square border-3 border-[#facc15] shadow-[0_0_20px_1px_#facc15]  h-fit w-fit"> 
      <img src="avatar.jpg" width={300} height={300}/>
    </div>
  );
};

export default Avatar;
