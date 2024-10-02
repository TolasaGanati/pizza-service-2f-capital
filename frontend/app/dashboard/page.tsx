// "use client"; // Add this line at the top to make this a Client Component

// import { useState } from "react";
// import Orders from "./orders/page";
// import AddMenuPage from "./addMenu/addMenu";
// import Role from "./roles/page";
// import User from "./user/page";
// import Sidebar from "@/components/global/sidebar";

// export default function Dashboard() {
//   const [selectedComponent, setSelectedComponent] = useState("Orders");

//   const renderComponent = () => {
//     switch (selectedComponent) {
//       case "Orders":
//         return <Orders />;
//       case "AddMenu":
//         return <AddMenuPage />;
//       case "Role":
//         return <Role />;
//       case "User":
//         return <User />;
//       default:
//         return <p>Invalid selection</p>;
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar
//         open={true}
//         setOpen={() => {}}
//         onMenuItemClick={setSelectedComponent} // Pass function to Sidebar
//       />
//       <div style={{ flexGrow: 1, padding: "20px" }}>{renderComponent()}</div>
//     </div>
//   );
// }
