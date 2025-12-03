import React, { useEffect, useState } from "react";
import SkillCards from "../../components/SkillCards/SkillCards";
import { FaSearch } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";

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
        <div className="container mx-auto px-4 py-10 bg-gray-100">

            {/* Page Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-600 mb-6">
                All Courses
            </h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-10">
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
                    No courses found for “{search}”
                </p>
            )}
        </div>
    );
};

export default Courses;

