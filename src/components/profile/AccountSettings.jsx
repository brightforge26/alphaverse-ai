function AccountSettings() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Account Settings

      </h2>

      <div className="space-y-4">

        <button className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-left">

          Change Password

        </button>

        <button className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-left">

          Manage Notifications

        </button>

        <button className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-left">

          Privacy Settings

        </button>

      </div>

    </div>

  );

}

export default AccountSettings;