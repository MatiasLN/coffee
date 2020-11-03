import React from "react";
import { UserProvider } from "./context/UserContext";
import MainContent from "./comps/MainContent";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <MainContent />
      </div>
    </UserProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import { UserProvider } from "./context/UserContext";
// import ImageGrid from "./comps/ImageGrid";
// import Logo from "./comps/Logo";
// import Modal from "./comps/Modal";
// import Title from "./comps/Title";
// import UploadForm from "./comps/UploadForm";
// import SignIn from "./comps/SignIn";
// import User from "./comps/User";

// function App() {
//   const newRating = (data) => {
//     if (data) {
//       setRating(data);
//     }
//   };

//   const [data, setData] = useState(null);
//   const [rating, setRating] = useState(newRating);

//   return (
//     <UserProvider>
//       <div className="App">
//         <Logo />
//         <User />
//         <SignIn />
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
//     </UserProvider>
//   );
// }

// export default App;
