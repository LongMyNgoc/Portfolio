"use client";

import { useState } from "react";
import GithubCard from "./GithubCard";
import { featuredProjects } from "@/data/featuredProjects";
import type { Project } from "@/data/featuredProjects";

const Project = () => {
  const [selectedType, setSelectedType] = useState<"web" | "mobile" | "game">("web");

  const filteredProjects = featuredProjects.filter(
    (project: Project) => project.type === selectedType
  );

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10 px-4 sm:px-6 lg:px-8">
      {/* Nút chuyển hướng Web / Mobile */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <button
          onClick={() => setSelectedType("web")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedType === "web"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          🌐 Web
        </button>
        <button
          onClick={() => setSelectedType("mobile")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedType === "mobile"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          📱 Mobile
        </button>
        <button
          onClick={() => setSelectedType("game")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedType === "game"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          🎮 Game
        </button>
      </div>

      {/* Hiển thị danh sách Project */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((repo, index) => (
          <GithubCard
            key={index}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            demo_url={repo.demo_url}
            feedback_url={repo.feedback_url}
            image_url={repo.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
