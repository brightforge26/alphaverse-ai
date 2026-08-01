import { Mail, Phone, MapPin } from "lucide-react";

function UserInfo() {

  const username = localStorage.getItem("username") || "Investor";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-3xl font-bold">

          {username.charAt(0).toUpperCase()}

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            {username}
          </h2>

          <p className="text-slate-400">
            Premium Investor
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <Mail size={20} />

          <span>kamalesh@email.com</span>

        </div>

        <div className="flex items-center gap-3">

          <Phone size={20} />

          <span>+91 9876543210</span>

        </div>

        <div className="flex items-center gap-3">

          <MapPin size={20} />

          <span>Chennai, India</span>

        </div>

      </div>

    </div>
  );
}

export default UserInfo;