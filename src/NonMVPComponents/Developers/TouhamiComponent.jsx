//This component will talk about Touhami
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Touhami from "../../Assets/Touhami.jpg"

const TohamiComponent = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 pb-4 p-4 text-center text-3xl font-bold dark:text-white">
        {" "}
        Touhami Ben
      </h1>
      <div className="flex flex-col items-center justify-center py-10">
        {/* Central Image */}
        <div className="relative">
          <img
            src={Touhami}
            alt="Profile"
            className="w-44 h-44 rounded-full transition transform hover:scale-110 animate-flyInUp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-lg">
        <div className="bg-purple-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
          <p className="text-black text-center">
            <strong>Hobbies</strong>
            <br />
            Soccer, Hiking
          </p>
        </div>
        <div className="bg-yellow-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
          <p className="text-black text-center">
            <strong>Passion</strong>
            <br />
            Reading My Holy Book
          </p>
        </div>

        <div className="bg-pink-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
        <p className="text-black text-center">
            <strong>Education</strong>
            <br />
            Journalism & Software Development
            </p>
        </div>
        <div className="bg-green-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
          <p className="text-black text-center">
            <strong>Ask me about</strong>
            <br />
            Journalism
          </p>
        </div>
        <div className="bg-orange-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInRight">
          <Link
            to="https://github.com/touhami-ben"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-center mb-3"
          >
            <strong>GitHub</strong>
          </Link>
          <BsGithub size={18} />
        </div>
        <div className="bg-blue-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
          <Link
            to="https://www.linkedin.com/in/touhami-benmessaoud-aaa072259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-center mb-3"
          >
            <strong>LinkedIn</strong>
          </Link>
          <BsLinkedin size={18} />
        </div>
      </div>
    </div>
  );
};

export default TohamiComponent;
