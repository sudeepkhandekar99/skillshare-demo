"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tags = [
  "Math Tutor",
  "Guitar Tutor",
  "Yoga Tutor",
  "Coding",
  "Soccer",
  "Skating",
  "Cooking",
];
const feedData = [
  // Math Tutor
  {
    name: "John Doe",
    profilePicture: "/img/profile1.jpg",
    location: "New York",
    title: "Master Math Tutoring",
    tags: ["Math Tutor"],
    description:
      "I provide math tutoring for high school and college students. Flexible schedule, personalized lessons, and test preparation to help you excel in your studies.",
  },
  {
    name: "Jane Smith",
    profilePicture: "/img/profile2.jpg",
    location: "Boston",
    title: "Advanced Math Guidance",
    tags: ["Math Tutor"],
    description:
      "With years of experience, I specialize in calculus and algebra for college students. One-on-one sessions tailored to your needs.",
  },
  {
    name: "Tom Johnson",
    profilePicture: "/img/profile3.jpg",
    location: "Chicago",
    title: "Math Foundations",
    tags: ["Math Tutor"],
    description:
      "Struggling with math basics? I can help build a strong foundation for middle and high school students to succeed in advanced topics.",
  },
  {
    name: "Alice Brown",
    profilePicture: "/img/profile1.jpg",
    location: "San Francisco",
    title: "Math Olympiad Trainer",
    tags: ["Math Tutor"],
    description:
      "Specialized training for competitive math exams and Olympiads. Intensive problem-solving sessions and concept clarity.",
  },

  // Guitar Tutor
  {
    name: "David Wilson",
    profilePicture: "/img/profile2.jpg",
    location: "Los Angeles",
    title: "Learn Guitar with Me!",
    tags: ["Guitar Tutor"],
    description:
      "Beginner and intermediate guitar lessons with personalized techniques and tips to help you play your favorite songs.",
  },
  {
    name: "Emily Davis",
    profilePicture: "/img/profile3.jpg",
    location: "Nashville",
    title: "Acoustic Guitar Lessons",
    tags: ["Guitar Tutor"],
    description:
      "Master the acoustic guitar with step-by-step lessons focusing on chords, fingerstyle, and strumming patterns.",
  },
  {
    name: "Michael Lee",
    profilePicture: "/img/profile1.jpg",
    location: "Seattle",
    title: "Rock Your Guitar Skills",
    tags: ["Guitar Tutor"],
    description:
      "Electric guitar sessions with emphasis on rock and blues. Learn solos, scales, and improvisation techniques.",
  },
  {
    name: "Sophia White",
    profilePicture: "/img/profile2.jpg",
    location: "Austin",
    title: "Guitar Theory and Practice",
    tags: ["Guitar Tutor"],
    description:
      "Understand music theory and its application to guitar playing. Develop your skills with hands-on practice and expert guidance.",
  },

  // Yoga Tutor
  {
    name: "Oliver Harris",
    profilePicture: "/img/profile3.jpg",
    location: "Austin",
    title: "Relax and Revive with Yoga",
    tags: ["Yoga Tutor"],
    description:
      "Experience personalized yoga sessions for mental and physical well-being. Improve your flexibility, strength, and mindfulness.",
  },
  {
    name: "Amelia Martinez",
    profilePicture: "/img/profile1.jpg",
    location: "Denver",
    title: "Yoga for Beginners",
    tags: ["Yoga Tutor"],
    description:
      "Start your yoga journey with beginner-friendly poses and techniques. Perfect for those new to yoga.",
  },
  {
    name: "Ethan Clark",
    profilePicture: "/img/profile2.jpg",
    location: "Miami",
    title: "Dynamic Yoga Classes",
    tags: ["Yoga Tutor"],
    description:
      "Join my dynamic yoga classes that combine strength, endurance, and flexibility for a holistic workout.",
  },
  {
    name: "Mia Robinson",
    profilePicture: "/img/profile3.jpg",
    location: "San Diego",
    title: "Therapeutic Yoga Sessions",
    tags: ["Yoga Tutor"],
    description:
      "Tailored yoga sessions focusing on pain relief, stress reduction, and overall wellness. Perfect for all ages.",
  },

  // Coding
  {
    name: "William Perez",
    profilePicture: "/img/profile1.jpg",
    location: "San Jose",
    title: "Coding for Beginners",
    tags: ["Coding"],
    description:
      "Learn the fundamentals of coding with Python. No prior experience needed. Hands-on projects included!",
  },
  {
    name: "Ava Hall",
    profilePicture: "/img/profile2.jpg",
    location: "Palo Alto",
    title: "Advanced JavaScript",
    tags: ["Coding"],
    description:
      "Dive deep into JavaScript concepts like closures, async programming, and front-end frameworks like React.",
  },
  {
    name: "Lucas Allen",
    profilePicture: "/img/profile3.jpg",
    location: "Seattle",
    title: "Full Stack Development",
    tags: ["Coding"],
    description:
      "Learn full-stack development, including Node.js, Express, and MongoDB. Build real-world projects and applications.",
  },
  {
    name: "Charlotte Young",
    profilePicture: "/img/profile1.jpg",
    location: "New York",
    title: "Coding Interview Prep",
    tags: ["Coding"],
    description:
      "Ace your coding interviews with mock sessions and problem-solving techniques tailored to top tech companies.",
  },

  // Add more names and dummy data for Soccer, Skating, and Cooking similarly...
];


export default function Feed() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Extract unique locations from feedData
  const uniqueLocations = ["All", ...new Set(feedData.map((item) => item.location))];

  const filteredFeed = feedData.filter((post) => {
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    const matchesLocation = selectedLocation === "All" || post.location === selectedLocation;
    return matchesTag && matchesLocation;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4">
          <h2 className="text-md font-bold mb-4">Tags</h2>
          <ul>
            <li
              className={`cursor-pointer py-1 px-2 mb-2 rounded ${
                selectedTag === "All" ? "bg-gray-700 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTag("All")}
            >
              All
            </li>
            {tags.map((tag) => (
              <li
                key={tag}
                className={`cursor-pointer py-1 px-2 mb-2 rounded ${
                  selectedTag === tag ? "bg-gray-700 text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>

          <h2 className="text-md font-bold mb-4 mt-6">Locations</h2>
          <ul>
            {uniqueLocations.map((location) => (
              <li
                key={location}
                className={`cursor-pointer py-1 px-2 mb-2 rounded ${
                  selectedLocation === location ? "bg-gray-700 text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Feed */}
        <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFeed.map((post, index) => (
            <Card
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            >
              {/* Card Header */}
              <CardHeader className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={post.profilePicture}
                    alt={post.title}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{post.name} | {post.location}</p>
              </CardHeader>

              {/* Card Content */}
              <CardContent>
                {/* Tags */}
                <div className="flex space-x-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700">{post.description}</p>
              </CardContent>

              {/* Card Footer */}
              <div className="mt-4">
                <Button className="bg-gray-700 text-white hover:bg-gray-800">Contact</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
