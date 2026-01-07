// import { useEffect, useState, useMemo } from "react";
// import axios from "axios";
// import "./App.css";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function App() {
//   const [originalData, setOriginalData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [industry, setIndustry] = useState("");
//   const [location, setLocation] = useState("");
//   const [view, setView] = useState("table");
//   const [loading, setLoading] = useState(false);

//   const industries = ["Software", "Agriculture", "Logistics", "Healthcare", "Construction"];
//   const locations = ["Hyderabad", "Pune", "Bengaluru", "Mumbai", "Delhi"];

//   // Fetch data once
//   const fetchCompanies = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:4000/companies");
//       setOriginalData(res.data);
//     } catch (err) {
//       console.error("Error loading data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   // Optimized filtering using useMemo (runs only when filters change)
//   const filteredCompanies = useMemo(() => {
//     return originalData.filter((c) => {
//       const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
//       const matchIndustry = industry ? c.industry === industry : true;
//       const matchLocation = location ? c.location === location : true;
//       console.log(matchSearch,matchIndustry,matchLocation)
//       return matchSearch && matchIndustry && matchLocation;
//     });
//   }, [search, industry, location, originalData]);
//   console.log(originalData,filteredCompanies);
//   return (
//     <>
//       <Header />

//       <div className="container">
//         {/* Filters */}
//         <div className="filters">

//           <input
//             className="input"
//             placeholder="Search company..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select className="input" value={industry} onChange={(e) => setIndustry(e.target.value)}>
//             <option value="">All Industries</option>
//             {industries.map((i) => <option key={i}>{i}</option>)}
//           </select>

//           <select className="input" value={location} onChange={(e) => setLocation(e.target.value)}>
//             <option value="">All Locations</option>
//             {locations.map((l) => <option key={l}>{l}</option>)}
//           </select>

//           <div className="view-buttons">
//             <button
//               className={view === "table" ? "btn active" : "btn"}
//               onClick={() => setView("table")}
//             >
//               Table
//             </button>

//             <button
//               className={view === "cards" ? "btn active" : "btn"}
//               onClick={() => setView("cards")}
//             >
//               Cards
//             </button>
//           </div>
//         </div>

//         {/* Loading */}
//         {loading && <p className="loading">Loading...</p>}

//         {/* No data */}
//         {!loading && filteredCompanies.length === 0 && (
//           <p className="nodata">🙁 No companies found</p>
//         )}

//         {/* Table View */}
//         {!loading && view === "table" && filteredCompanies.length > 0 && (
//           <div className="table-container">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Industry</th>
//                   <th>Location</th>
//                   <th>Website</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredCompanies.map((c) => (
//                   <tr key={c.id}>
//                     <td>{c.name}</td>
//                     <td>{c.industry}</td>
//                     <td>{c.location}</td>
//                     <td><a href={c.website} target="_blank">Visit</a></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Cards View */}
//         {!loading && view === "cards" && (
//           <div className="cards">
//             {filteredCompanies.map((c) => (
//               <div key={c.id} className="card">
//                 <h3>{c.name}</h3>
//                 <p><b>Industry:</b> {c.industry}</p>
//                 <p><b>Location:</b> {c.location}</p>
//                 <a href={c.website} className="website" target="_blank">Visit Website</a>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }



// Companies Directory – Frontend Development
// Question:
// To design and implement a React-based frontend application that consumes APIs and displays “Company” data with filtering features.
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { MdSearchOff } from "react-icons/md";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  const [view, setView] = useState("table");
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    setLoading(true);

    // Step 1 → Get all data
    const res = await axios.get("http://localhost:3001/companies");
    let data = res.data;

    // Step 2 → Case-insensitive search
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Step 3 → Industry filter
    if (industry) {
      data = data.filter((c) => c.industry === industry);
    }

    // Step 4 → Location filter
    if (location) {
      data = data.filter((c) => c.location === location);
    }

    setCompanies(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
  }, [search, industry, location]);

  const industries = ["Software", "Agriculture", "Logistics", "Healthcare", "Construction"];
  const locations = ["Hyderabad", "Pune", "Bengaluru", "Mumbai", "Delhi"];

  return (
    <>
    <Header></Header>
    <div className="container">
     <div className="filters">
        <input
          className="input"
          placeholder="Search company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="input" value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="">All Industries</option>
          {industries.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>

        <select className="input" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <div className="view-buttons">
          <button
            className={view === "table" ? "btn active" : "btn"}
            onClick={() => setView("table")}
          >
            Table
          </button>

          <button
            className={view === "cards" ? "btn active" : "btn"}
            onClick={() => setView("cards")}
          >
            Cards
          </button>
        </div>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {!loading && companies.length === 0 && (
        <p className="nodata">🙁 No companies found</p>
      )}

      {!loading && view === "table" && companies.length > 0 && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Industry</th>
                <th>Location</th>
                <th>Website</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.industry}</td>
                  <td>{c.location}</td>
                  <td>
                    <a href={c.website} target="_blank">Visit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && view === "cards" && (
        <div className="cards">
          {companies.map((c) => (
            <div key={c.id} className="card">
              <h3>{c.name}</h3>
              <p><b>Industry:</b> {c.industry}</p>
              <p><b>Location:</b> {c.location}</p>
              <a href={c.website} className="website" target="_blank">Visit Website</a>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}
