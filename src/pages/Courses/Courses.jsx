// import React, { useEffect, useState } from "react";
// import SkillCards from "../../components/SkillCards/SkillCards";
// import { FaSearch, FaSortAmountDown } from "react-icons/fa";
// import { BiFilterAlt } from "react-icons/bi";
// import Loading from "../../components/Loading/Loading";

// const Courses = () => {
//     const [courses, setCourses] = useState([]);
//     const [filtered, setFiltered] = useState([]);
//     const [search, setSearch] = useState("");
//     const [sortBy, setSortBy] = useState("default");
//     const [filterCategory, setFilterCategory] = useState("all");
//     const [categories, setCategories] = useState([]);

//     // Fetch JSON
//     useEffect(() => {
//         fetch("/demandingSkills.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCourses(data);
//                 setFiltered(data);
                
//                 // Extract unique categories
//                 const uniqueCategories = [...new Set(data.map(item => item.category))];
//                 setCategories(uniqueCategories);
//             })
//             .catch((err) => console.error("Error loading data:", err));
//     }, []);

//     // Search, Filter and Sort
//     useEffect(() => {
//         let result = [...courses];

//         // Search filter
//         const s = search.toLowerCase();
//         result = result.filter((item) => {
//             const name = item?.skillName?.toLowerCase() || "";
//             const category = item?.category?.toLowerCase() || "";
//             return name.includes(s) || category.includes(s);
//         });

//         // Category filter
//         if (filterCategory !== "all") {
//             result = result.filter(item => item.category === filterCategory);
//         }

//         // Sorting (Descending order)
//         if (sortBy === "name") {
//             result.sort((a, b) => b.skillName.localeCompare(a.skillName));
//         } else if (sortBy === "category") {
//             result.sort((a, b) => b.category.localeCompare(a.category));
//         }

//         setFiltered(result);
//     }, [search, courses, sortBy, filterCategory]);

//     return (
//         <div className="container mx-auto px-4 py-10 bg-gray-100">

//             {/* Page Title */}
//             <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-600 mb-6">
//                 All Courses
//             </h2>

//             {/* Search Bar */}
//             <div className="flex justify-center mb-6">
//                 <div className="relative w-full max-w-md">
//                     <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

//                     <input
//                         type="text"
//                         placeholder="Search by skill name or category..."
//                         className="w-full px-5 py-3 pl-12 border rounded-full focus:outline-none shadow-sm"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Sort and Filter Controls */}
//             <div className="flex flex-wrap justify-center gap-4 mb-10">
//                 {/* Sort Dropdown */}
//                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
//                     <FaSortAmountDown className="text-purple-600" />
//                     <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                         className="bg-transparent focus:outline-none cursor-pointer"
//                     >
//                         <option value="default">Default Order</option>
//                         <option value="name">Sort by Name (Z-A)</option>
//                         <option value="category">Sort by Category (Z-A)</option>
//                     </select>
//                 </div>

//                 {/* Category Filter */}
//                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
//                     <BiFilterAlt className="text-purple-600" />
//                     <select
//                         value={filterCategory}
//                         onChange={(e) => setFilterCategory(e.target.value)}
//                         className="bg-transparent focus:outline-none cursor-pointer"
//                     >
//                         <option value="all">All Categories</option>
//                         {categories.map((cat, idx) => (
//                             <option key={idx} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Loading */}
//             {courses.length === 0 && (
//                 <Loading></Loading>
//             )}

//             {/* Course Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-9">
//                 {filtered.map((course) => (
//                     <SkillCards key={course.skillId} skills={course} />
//                 ))}
//             </div>

//             {/* No Result */}
//             {filtered.length === 0 && search !== "" && (
//                 <p className="text-center text-gray-600 mt-6">
//                     No courses found for "{search}"
//                 </p>
//             )}
//         </div>
//     );
// };

// export default Courses;

import React, { useEffect, useState } from "react";
import SkillCards from "../../components/SkillCards/SkillCards";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { BiFilterAlt } from "react-icons/bi";
import Loading from "../../components/Loading/Loading";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [filterCategory, setFilterCategory] = useState("all");
    const [categories, setCategories] = useState([]);

    // Fetch JSON
    useEffect(() => {
        fetch("/demandingSkills.json")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                setFiltered(data);
                
                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    // Search, Filter and Sort
    useEffect(() => {
        let result = [...courses];

        // Search filter
        const s = search.toLowerCase();
        result = result.filter((item) => {
            const name = item?.skillName?.toLowerCase() || "";
            const category = item?.category?.toLowerCase() || "";
            return name.includes(s) || category.includes(s);
        });

        // Category filter
        if (filterCategory !== "all") {
            result = result.filter(item => item.category === filterCategory);
        }

        // Sorting by Price
        if (sortBy === "price-high") {
            result.sort((a, b) => (b.price || 0) - (a.price || 0)); // বড় থেকে ছোট
        } else if (sortBy === "price-low") {
            result.sort((a, b) => (a.price || 0) - (b.price || 0)); // ছোট থেকে বড়
        }

        setFiltered(result);
    }, [search, courses, sortBy, filterCategory]);

    return (
        <div className="container mx-auto px-4 py-10 bg-gray-100">

            {/* Page Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-600 mb-6">
                All Courses
            </h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                    <input
                        type="text"
                        placeholder="Search by skill name or category..."
                        className="w-full px-5 py-3 pl-12 border rounded-full focus:outline-none shadow-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <FaSortAmountDown className="text-purple-600" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent focus:outline-none cursor-pointer"
                    >
                        <option value="default">Default Order</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="price-low">Price: Low to High</option>
                    </select>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <BiFilterAlt className="text-purple-600" />
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="bg-transparent focus:outline-none cursor-pointer"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Loading */}
            {courses.length === 0 && (
                <Loading></Loading>
            )}

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-9">
                {filtered.map((course) => (
                    <SkillCards key={course.skillId} skills={course} />
                ))}
            </div>

            {/* No Result */}
            {filtered.length === 0 && search !== "" && (
                <p className="text-center text-gray-600 mt-6">
                    No courses found for "{search}"
                </p>
            )}
        </div>
    );
};

export default Courses;