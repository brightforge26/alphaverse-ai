import {
  Mail,
  Phone,
  MapPin,
  Crown,
  UserCircle,
} from "lucide-react";

function UserInfo() {

  const username = localStorage.getItem("username") || "Investor";

  return (

    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Profile Header */}
      <div className="flex items-center gap-5">

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">

          {username.charAt(0).toUpperCase()}

        </div>


        <div>

          <div className="flex items-center gap-2">

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {username}
            </h2>

            <UserCircle
              className="text-cyan-500"
              size={28}
            />

          </div>


          <div className="flex items-center gap-2 mt-2">

            <Crown
              size={18}
              className="text-yellow-400"
            />

            <p className="text-yellow-500 font-semibold">
              Premium Investor
            </p>

          </div>


        </div>

      </div>


      {/* Divider */}
      <div className="border-t border-slate-200 dark:border-slate-700 my-7"></div>


      {/* User Details */}
      <div className="space-y-5">


        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-xl p-4">

          <Mail
            size={22}
            className="text-cyan-400"
          />

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Email
            </p>

            <span className="text-slate-900 dark:text-white">
              kamalesh@email.com
            </span>

          </div>

        </div>



        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-xl p-4">

          <Phone
            size={22}
            className="text-green-400"
          />

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Phone
            </p>

            <span className="text-slate-900 dark:text-white">
              +91 9876543210
            </span>

          </div>

        </div>



        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-xl p-4">

          <MapPin
            size={22}
            className="text-red-400"
          />

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Location
            </p>

            <span className="text-slate-900 dark:text-white">
              Chennai, India
            </span>

          </div>

        </div>


      </div>


    </div>

  );
}

export default UserInfo;