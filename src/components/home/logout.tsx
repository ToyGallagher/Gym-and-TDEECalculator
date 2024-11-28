import { auth } from "../../lib/firebase";

export default function LogoutButton() {
  const handleLogout = async () => {
    await auth.signOut();
    alert("Logged out successfully");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
}