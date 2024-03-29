"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Ensure this code runs only in the browser
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation {
              registerUser(input: {
                email: "booldoooo@gmail.com",
                password: "123",
                image: "Bi.jpg",
                name: "Hi",
                age: "16",
                phoneNumber: "99698416" 
              })
            }
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data ? (
            <div>
              <h2>User Created:</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ) : (
            <button onClick={fetchData}>Create User</button>
          )}
        </div>
      )}
    </div>
  );
}
