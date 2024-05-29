// import React, { useState } from "react";

// const ItemContents = ({ contents }) => {
//   const [currentSubMenu, setCurrentSubMenu] = useState([]);

//   const handleMenuHover = (subMenu) => {
//     setCurrentSubMenu(subMenu);
//   };

//   return (
//     <div>
//       {contents.map((menu, index) => (
//         <div key={index} onMouseEnter={() => handleMenuHover(menu.content)}>
//           <h2>{menu.head}</h2>
//         </div>
//       ))}
//       <ul>
//         {currentSubMenu.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemContents;
