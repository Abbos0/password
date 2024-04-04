
import React, { useState } from 'react';
const Password = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '2002') {
      onLogin(); // Call the onLogin prop to update the isLoggedIn state in the parent component
    } else {
      setPassword(''); // Reset the password field if the entered password is incorrect
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[skyblue]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pswd">  Password </label> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="pswd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Log in  </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
















// import React, { useState } from 'react';

// const Password = ({ onLogin }) => {
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === '12345') {
//       onLogin();
//     } else {
//       setPassword(''); 
//     }
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           className="input"
//           type="password"
//           id="pswd"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default Password;

