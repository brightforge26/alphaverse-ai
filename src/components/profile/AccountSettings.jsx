import {
  LockKeyhole,
  Bell,
  ShieldCheck,
  Settings,
} from "lucide-react";

function AccountSettings() {

  const settings = [
    {
      title: "Change Password",
      description: "Update your account password securely",
      icon: <LockKeyhole size={22} />,
    },
    {
      title: "Manage Notifications",
      description: "Control alerts and market updates",
      icon: <Bell size={22} />,
    },
    {
      title: "Privacy Settings",
      description: "Manage your data and privacy preferences",
      icon: <ShieldCheck size={22} />,
    },
  ];


  return (

    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">


      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <Settings
          size={28}
          className="text-cyan-500"
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Account Settings
        </h2>

      </div>


      {/* Settings List */}
      <div className="space-y-4">

        {settings.map((item,index)=>(

          <button
            key={index}
            className="w-full flex items-center gap-4 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-100 dark:hover:bg-slate-700 rounded-xl p-4 transition duration-300 text-left"
          >

            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">

              {item.icon}

            </div>


            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

            </div>


          </button>

        ))}

      </div>


    </div>

  );

}

export default AccountSettings;