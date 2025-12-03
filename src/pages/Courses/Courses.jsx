// import React from 'react';

// const Courses = () => {
//     return (
//         <div>
//             Courses
//             <p>Lorem</p>
//         </div>
//     );
// };

// export default Courses;

import React, { useEffect, useState } from "react";
import SkillCards from "../../components/SkillCards/SkillCards";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch JSON
    useEffect(() => {
        fetch("/demandingSkills.json")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                setFiltered(data);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    // Search filter
    useEffect(() => {
        const s = search.toLowerCase();

        const result = courses.filter((item) => {
            const name = item?.skillName?.toLowerCase() || "";
            const category = item?.category?.toLowerCase() || "";
            return name.includes(s) || category.includes(s);
        });

        setFiltered(result);
    }, [search, courses]);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6">All Courses</h2>

            {/* Search Box */}
            <input
                type="text"
                placeholder="Search by skill name or category..."
                className="w-full px-4 py-2 border rounded-md mb-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Loading */}
            {courses.length === 0 && <p>Loading courses...</p>}

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((course) => (
                    <SkillCards
                        key={course.skillId}
                        skills={course}   // <-- FIXED
                    />
                ))}
            </div>

            {/* No Result */}
            {filtered.length === 0 && search !== "" && (
                <p className="text-center text-gray-600 mt-6">
                    No courses found for “{search}”
                </p>
            )}
        </div>
    );
};

export default Courses;

