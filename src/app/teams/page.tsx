import React from "react";
import TeamMembers from "../component/molucules/teams.module";

export default function Teams() {
  return (
    <section className="flex flex-col justify-center min-h-screen pt-5 pb-5 sm:px-10 lg:px-6 bg-slate-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <TeamMembers />
      </div>
    </section>
  );
}
