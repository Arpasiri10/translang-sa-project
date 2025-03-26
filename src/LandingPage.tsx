import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";


interface User {
  id: number;
  userName: string;
  email: string;
  userId: string;
  created: string;
  lastEdited: string;
  status: "Approved" | "Denied";
}

const initialUsers: User[] = [
  { id: 1, userName: "John Doe", email: "john@email.com", userId: "123456", created: "01/22/2019", lastEdited: "06/12/2019", status: "Approved" },
  { id: 2, userName: "Jane Smith", email: "jane@email.com", userId: "654321", created: "02/13/2018", lastEdited: "05/07/2019", status: "Denied" },
  { id: 3, userName: "Alice Brown", email: "alice@email.com", userId: "789012", created: "12/30/2018", lastEdited: "06/04/2019", status: "Denied" },
  { id: 4, userName: "Bob White", email: "bob@email.com", userId: "345678", created: "04/22/2018", lastEdited: "06/12/2019", status: "Approved" },
];


const LandingPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id: number) => {
    alert(`แก้ไข User ID: ${id}`); // สามารถเพิ่มฟอร์มแก้ไขจริงได้
  };


  // ฟังก์ชันเพิ่มผู้ใช้ใหม่ (จำลอง)
  const handleAddUser = () => {
    const newUser: User = {
      id: users.length + 1,
      userName: "New User",
      email: `newuser${users.length + 1}@email.com`,
      userId: `ID${users.length + 1}`,
      created: new Date().toLocaleDateString(),
      lastEdited: new Date().toLocaleDateString(),
      status: "Approved",
    };
    setUsers([...users, newUser]);
  };

  const filteredUsers: User[] = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.includes(searchTerm)
  );
  // useEffect(() => {
  //   fetch("API_URL_HERE") // แทน API_URL_HERE ด้วย API จริงของคุณ
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //       setFilteredData(result);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // const handleSearch = () => {
  //   const filtered = data.filter((item) =>
  //     item.userName.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };

  // const handleClear = () => {
  //   setSearchTerm("");
  //   setFilteredData(data);
  // };

  return (
    // <div className="max-w-5xl mx-auto py-10">
    //   <Card>
    //     <CardContent>
    //       <div className="flex space-x-2 mb-4">
    //         <Input
    //           placeholder="Search by user name..."
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //         />
    //         <Button onClick={handleSearch}>Search</Button>
    //         <Button variant="outline" onClick={handleClear}>
    //           Clear
    //         </Button>
    //       </div>

    //       <Table>
    //         <TableHeader>
    //           <TableRow>
    //             <TableHead>User Name</TableHead>
    //             <TableHead>Email</TableHead>
    //             <TableHead>User ID</TableHead>
    //             <TableHead>Created</TableHead>
    //             <TableHead>Last Edited</TableHead>
    //             <TableHead>Status</TableHead>
    //           </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //           {ListData.map((user, index) => (
    //             <TableRow key={index}>
    //               <TableCell>{user.userName}</TableCell>
    //               <TableCell>{user.email}</TableCell>
    //               <TableCell>{user.userId}</TableCell>
    //               <TableCell>{user.created}</TableCell>
    //               <TableCell>{user.lastEdited}</TableCell>
    //               <TableCell>
    //                 {user.status === "Approved" ? (
    //                   <span className="text-green-600">✅ Approved</span>
    //                 ) : (
    //                   <span className="text-red-600">❌ Denied</span>
    //                 )}
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="p-6 bg-blue-500 min-h-screen flex flex-col items-center">
      {/* ช่องค้นหาอยู่บนสุด */}
      <div className="mb-4 w-full max-w-4xl">
        <div className="flex bg-white p-2 rounded-lg shadow-md w-full">
          <input
            type="text"
            placeholder="ค้นหา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
            ค้นหา
          </button>
        </div>
      </div>

      {/* ปุ่มเพิ่มผู้ใช้ */}
      <div className="w-full max-w-4xl mb-2 flex">
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          + เพิ่มผู้ใช้
        </button>
      </div>

      {/* ตารางข้อมูล */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="p-3">
                <input type="checkbox" className="form-checkbox h-5 w-5" />
              </th>
              <th className="p-3">User Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">User ID</th>
              <th className="p-3">Created</th>
              <th className="p-3">Last Edited</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" />
                  </td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.userId}</td>
                  <td className="p-3">{user.created}</td>
                  <td className="p-3">{user.lastEdited}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs ${user.status === "Approved" ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 flex space-x-2 justify-center">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-xs"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-xs"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center p-4 text-gray-500">
                  ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPage;