// import React, { useState, useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import ImageGrid from "./comps/ImageGrid";
// import Logo from "./comps/Logo";
// import Modal from "./comps/Modal";
// import Title from "./comps/Title";
// import UploadForm from "./comps/UploadForm";
// import SignIn from "./comps/SignIn";
// import User from "./comps/User";

// function MainContent() {
//   const newRating = (data) => {
//     if (data) {
//       setRating(data);
//     }
//   };

//   const [data, setData] = useState(null);
//   const [rating, setRating] = useState(newRating);
//   const user = useContext(UserContext);
//   const uid = user.user.uid;

//   if (uid) {
//     return (
//       <div className="MainContent">
//         <Logo />
//         <User />
//         <Title />
//         <UploadForm />
//         <ImageGrid
//           data={data}
//           setData={setData}
//           rating={rating}
//           setRating={setRating}
//         />
//         {data && (
//           <Modal
//             data={data}
//             setData={setData}
//             initRating={newRating}
//             rating={rating}
//             setRating={setRating}
//           />
//         )}
//       </div>
//     );
//   } else {
//     return (
//       <>
//         <Logo />
//         <Title />
//         <SignIn />
//       </>
//     );
//   }
// }

// export default MainContent;
