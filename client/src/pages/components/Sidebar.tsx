import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useUser } from "../../contexts/UserContext";

// icons
import dashboard from "../../assets/icons/dashboard.svg";
import prescription from "../../assets/icons/prescriptions.svg";
import settings from "../../assets/icons/settings.svg";
import help from "../../assets/icons/help.svg";
import logout from "../../assets/icons/logout.svg";
// images
import logo from "../../assets/ignatius-logo.svg";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { setName } = useUser();

  const handleLogout = async () => {
    await signOut(auth);
    setName("");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen text-[#404040] border fixed top-0 left-0 flex flex-col p-4 font-inter">
      <img src={logo} className="w-40" />

      <div className="flex mb-8 flex-col p-1 mt-10">
        <h1 className="text-l font-bold">Dr. User</h1>
        <div className="text-sm">Doctor</div>
      </div>

      <nav className="space-y-2">
        <h2 className="font-semibold text-[#0077B6]">MAIN</h2>
        <button
          onClick={() => navigate("/home")}
          className="flex gap-2 items-center font-medium hover:bg-gray-100 p-1 rounded w-full text-left"
        >
          <img src={dashboard} alt="" />
          Dashboard
        </button>
        <button
          onClick={() => navigate("/prescriptions")}
          className="flex gap-2 items-center font-medium hover:bg-gray-100 p-1 rounded w-full text-left"
        >
          <img src={prescription} alt="" />
          Prescriptions
        </button>
      </nav>

      <nav className="space-y-2 mt-5">
        <h2 className="font-semibold text-[#0077B6]">SUPPORT</h2>
        <button
          onClick={() => navigate("")}
          className="flex gap-2 items-center font-medium hover:bg-gray-100 p-1 rounded w-full text-left"
        >
          <img src={help} alt="" />
          Help Center
        </button>
        <button
          onClick={() => navigate("")}
          className="flex gap-2 items-center font-medium hover:bg-gray-100 p-1 rounded w-full text-left"
        >
          <img src={settings} alt="" />
          Settings
        </button>
        <button
          onClick={handleLogout}
          className="flex gap-2 items-center font-medium text-[#FF4564] p-1 rounded w-full text-left"
        >
          <img src={logout} alt="" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
