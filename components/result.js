// // import React, { useState } from 'react';

// function App() {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [sum, setSum] = useState(null);

//   const handleAdd = () => {
//     const result = parseFloat(num1) + parseFloat(num2);
//     setSum(result);
//   };

//   return (
//     <div>
//       <h1>Addition of Two Numbers</h1>

//       <div>
//         <input
//           type="number"
//           placeholder="Enter first number"
//           value={num1}
//           onChange={(e) => setNum1(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="number"
//           placeholder="Enter second number"
//           value={num2}
//           onChange={(e) => setNum2(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={handleAdd}>Add</button>
//       </div>

//       {sum !== null && (
//         <div>
//           <h2>Sum: {sum}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
