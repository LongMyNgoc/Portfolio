'use client';

import { FaGithub, FaLink, FaCommentAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';

type GithubCardProps = {
  name: string;
  description: string;
  html_url: string;
  demo_url: string;
  image_url: string;
};

const GithubCard: React.FC<GithubCardProps> = ({
  name,
  description,
  html_url,
  demo_url,
  image_url,
}) => {
  const router = useRouter();

  const handleFeedbackClick = () => {
    router.push(`/feedback?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between">
      <div>
        <img
          src={image_url}
          alt={`${name} screenshot`}
          className="w-full object-contain rounded-md mb-3 bg-gray-100"
        />
        <h2 className="text-lg font-semibold mb-1 text-center">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex gap-3 mt-4 justify-center flex-wrap">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a
          href={demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition"
        >
          <FaLink className="mr-2" /> Demo
        </a>
        <button
          onClick={handleFeedbackClick}
          className="flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-500 transition"
        >
          <FaCommentAlt className="mr-2" /> Feedback
        </button>
      </div>
    </div>
  );
};

export default GithubCard;
