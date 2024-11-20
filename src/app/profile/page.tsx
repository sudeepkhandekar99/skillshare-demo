"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const tags = [
  "Math Tutor",
  "Guitar Tutor",
  "Yoga Tutor",
  "Coding",
  "Soccer",
  "Skating",
  "Cooking",
];

export default function ProfilePage() {
  const router = useRouter();
  const [skills, setSkills] = useState([]);
  const [showAddSkill, setShowAddSkill] = useState(false);

  // Load skills from localStorage when the component mounts
  useEffect(() => {
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  // Add skill and save it to localStorage
  const handleAddSkill = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSkill = {
      location: formData.get("location"),
      title: formData.get("title"),
      description: formData.get("description"),
      tags: formData.get("tags"),
    };

    const updatedSkills = [...skills, newSkill];
    setSkills(updatedSkills);

    // Save updated skills to localStorage
    localStorage.setItem("skills", JSON.stringify(updatedSkills));

    e.target.reset();
    setShowAddSkill(false); // Hide the form after adding a skill
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Profile Details */}
      <div className="bg-gray-100 p-6 rounded shadow">
        <div className="flex items-center space-x-4">
          <img
            src="/img/profile1.jpg"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p>Email: john.doe@example.com</p>
            <p>Location: New York, USA</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => router.push("/subscription")}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Change Subscription Plan
          </button>
          <button
            onClick={() => setShowAddSkill(true)}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Add Skill Section */}
      {showAddSkill && (
        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add Skill</h2>
          <form onSubmit={handleAddSkill} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="tags" className="block text-sm font-medium">
                Tags
              </label>
              <select
                id="tags"
                name="tags"
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select a tag</option>
                {tags.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Add Skill
            </button>
          </form>
        </div>
      )}

      {/* Display Added Skills */}
      {skills.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-4">Added Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow border border-gray-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="/img/profile1.jpg"
                    alt={skill.title}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                    <p className="text-sm text-gray-600">
                      Location: {skill.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{skill.description}</p>
                <div className="flex space-x-2">
                  <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                    {skill.tags}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
