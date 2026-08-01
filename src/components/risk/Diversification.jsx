const sectors = [

  { name: "IT", value: "40%" },

  { name: "Banking", value: "25%" },

  { name: "Healthcare", value: "15%" },

  { name: "Energy", value: "10%" },

  { name: "Others", value: "10%" },

];

function Diversification() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Portfolio Diversification

      </h2>

      {sectors.map((sector) => (

        <div
          key={sector.name}
          className="flex justify-between border-b border-slate-700 py-4"
        >

          <span>{sector.name}</span>

          <span className="text-cyan-400">

            {sector.value}

          </span>

        </div>

      ))}

    </div>

  );

}

export default Diversification;