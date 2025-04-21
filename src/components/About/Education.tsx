import React from "react";

const Education: React.FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-4xl font-semibold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
  Education
</h3>
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <ul className="list-disc pl-5 text-xl space-y-4">
          <li className="hover:text-indigo-500 transition-colors duration-300">
            <strong>Bachelor of Information Technology - </strong> Ho Chi Minh City University of Education (2022 - 2026)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
