"use client";
import React, { useEffect, useState } from "react";
import { getTeamMembers, ITeamMember } from "@/lib/products/teams";

export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Meet Our Amazing Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of dedicated professionals passionate about helping
            businesses grow. With years of experience and diverse skills, we are
            committed to delivering innovative solutions and exceptional
            results. Get to know the brilliant minds behind{" "}
            <span className="font-semibold text-indigo-600">Space Enough</span>.
          </p>
        </div>

        {/* Team Members */}
        {loading ? (
          <p className="text-center text-gray-500 text-sm">
            Loading team members...
          </p>
        ) : teamMembers.length > 0 ? (
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center text-center"
              >
                {/* Profile Picture */}
                <img
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mb-6"
                  src={member.photoUrl}
                  alt={member.name}
                />

                {/* Name & Position */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-4">
                  {member.position}
                </p>

                {/* Expertise */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.expertise
                    ? member.expertise
                    : "An expert in their field, committed to delivering quality and innovation."}
                </p>

                {/* Contact Info */}
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 transition"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-.029-3.156-1.923-3.156-1.924 0-2.221 1.5-2.221 3.053v5.603h-3v-10h2.884v1.367h.041c.402-.761 1.384-1.561 2.848-1.561 3.046 0 3.608 2.004 3.608 4.612v5.582z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No team members available at this time.
          </p>
        )}
      </div>
    </section>
  );
}
