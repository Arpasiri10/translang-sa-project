import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("API_URL_HERE") // แทน API_URL_HERE ด้วย API จริงของคุณ
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setFilteredData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredData(data);
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* <Card>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Search by user name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Edited</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.created}</TableCell>
                  <TableCell>{user.lastEdited}</TableCell>
                  <TableCell>
                    {user.status === "Approved" ? (
                      <span className="text-green-600">✅ Approved</span>
                    ) : (
                      <span className="text-red-600">❌ Denied</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default LandingPage;