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
    profilePicture: "/img/profile1.jpg",
    location: "New York ",
    title: "Master Math Tutoring",
    tags: ["Math Tutor"],
    description:
      "I provide math tutoring for high school and college students. Flexible schedule, personalized lessons, and test preparation to help you excel in your studies.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Boston ",
    title: "Advanced Math Guidance",
    tags: ["Math Tutor"],
    description:
      "With years of experience, I specialize in calculus and algebra for college students. One-on-one sessions tailored to your needs.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "Chicago ",
    title: "Math Foundations",
    tags: ["Math Tutor"],
    description:
      "Struggling with math basics? I can help build a strong foundation for middle and high school students to succeed in advanced topics.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "San Francisco ",
    title: "Math Olympiad Trainer",
    tags: ["Math Tutor"],
    description:
      "Specialized training for competitive math exams and Olympiads. Intensive problem-solving sessions and concept clarity.",
  },

  // Guitar Tutor
  {
    profilePicture: "/img/profile2.jpg",
    location: "Los Angeles ",
    title: "Learn Guitar with Me!",
    tags: ["Guitar Tutor"],
    description:
      "Beginner and intermediate guitar lessons with personalized techniques and tips to help you play your favorite songs.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "Nashville ",
    title: "Acoustic Guitar Lessons",
    tags: ["Guitar Tutor"],
    description:
      "Master the acoustic guitar with step-by-step lessons focusing on chords, fingerstyle, and strumming patterns.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "Seattle ",
    title: "Rock Your Guitar Skills",
    tags: ["Guitar Tutor"],
    description:
      "Electric guitar sessions with emphasis on rock and blues. Learn solos, scales, and improvisation techniques.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Austin ",
    title: "Guitar Theory and Practice",
    tags: ["Guitar Tutor"],
    description:
      "Understand music theory and its application to guitar playing. Develop your skills with hands-on practice and expert guidance.",
  },

  // Yoga Tutor
  {
    profilePicture: "/img/profile3.jpg",
    location: "Austin ",
    title: "Relax and Revive with Yoga",
    tags: ["Yoga Tutor"],
    description:
      "Experience personalized yoga sessions for mental and physical well-being. Improve your flexibility, strength, and mindfulness.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "Denver ",
    title: "Yoga for Beginners",
    tags: ["Yoga Tutor"],
    description:
      "Start your yoga journey with beginner-friendly poses and techniques. Perfect for those new to yoga.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Miami ",
    title: "Dynamic Yoga Classes",
    tags: ["Yoga Tutor"],
    description:
      "Join my dynamic yoga classes that combine strength, endurance, and flexibility for a holistic workout.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "San Diego ",
    title: "Therapeutic Yoga Sessions",
    tags: ["Yoga Tutor"],
    description:
      "Tailored yoga sessions focusing on pain relief, stress reduction, and overall wellness. Perfect for all ages.",
  },

  // Coding
  {
    profilePicture: "/img/profile1.jpg",
    location: "San Jose ",
    title: "Coding for Beginners",
    tags: ["Coding"],
    description:
      "Learn the fundamentals of coding with Python. No prior experience needed. Hands-on projects included!",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Palo Alto ",
    title: "Advanced JavaScript",
    tags: ["Coding"],
    description:
      "Dive deep into JavaScript concepts like closures, async programming, and front-end frameworks like React.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "Seattle ",
    title: "Full Stack Development",
    tags: ["Coding"],
    description:
      "Learn full-stack development, including Node.js, Express, and MongoDB. Build real-world projects and applications.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "New York ",
    title: "Coding Interview Prep",
    tags: ["Coding"],
    description:
      "Ace your coding interviews with mock sessions and problem-solving techniques tailored to top tech companies.",
  },

  // Soccer
  {
    profilePicture: "/img/profile3.jpg",
    location: "Dallas ",
    title: "Soccer Training for All",
    tags: ["Soccer"],
    description:
      "Professional soccer training for players of all levels. Focus on fitness, techniques, and game strategies.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "Houston ",
    title: "Youth Soccer Coaching",
    tags: ["Soccer"],
    description:
      "Specialized coaching for young players to enhance their skills, teamwork, and passion for soccer.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Orlando ",
    title: "Soccer Drills and Techniques",
    tags: ["Soccer"],
    description:
      "Learn advanced soccer drills and techniques to take your game to the next level.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "Phoenix ",
    title: "Soccer Game Strategies",
    tags: ["Soccer"],
    description:
      "Understand game strategies and tactics to improve your performance on the field.",
  },

  // Skating
  {
    profilePicture: "/img/profile1.jpg",
    location: "Portland ",
    title: "Skating for Beginners",
    tags: ["Skating"],
    description:
      "Get started with skating basics, from balance to safe techniques. Great for all age groups.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Salt Lake City ",
    title: "Advanced Skating Tricks",
    tags: ["Skating"],
    description:
      "Master advanced skating tricks and techniques with one-on-one coaching sessions.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "Denver ",
    title: "Skating Fitness Classes",
    tags: ["Skating"],
    description:
      "Combine fitness and fun with skating classes focused on cardio and endurance.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "San Francisco ",
    title: "Skating Competitions Prep",
    tags: ["Skating"],
    description:
      "Prepare for skating competitions with personalized coaching and performance tips.",
  },

  // Cooking
  {
    profilePicture: "/img/profile2.jpg",
    location: "Los Angeles ",
    title: "Home Chef Cooking Classes",
    tags: ["Cooking"],
    description:
      "Learn to cook delicious meals at home with step-by-step guidance and recipe tips.",
  },
  {
    profilePicture: "/img/profile3.jpg",
    location: "New Orleans ",
    title: "Master Baking Techniques",
    tags: ["Cooking"],
    description:
      "Improve your baking skills with professional techniques for cakes, bread, and pastries.",
  },
  {
    profilePicture: "/img/profile1.jpg",
    location: "Chicago ",
    title: "Healthy Cooking Workshops",
    tags: ["Cooking"],
    description:
      "Join workshops on preparing healthy, nutritious, and tasty meals for you and your family.",
  },
  {
    profilePicture: "/img/profile2.jpg",
    location: "Miami ",
    title: "World Cuisine Exploration",
    tags: ["Cooking"],
    description:
      "Explore cuisines from around the world with hands-on cooking sessions. From Italian to Thai dishes, we've got you covered!",
  },
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
                <p className="text-sm text-gray-600">{post.location}</p>
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
                <Button className="bg-gray-700 text-white hover:bg-gray-800">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
