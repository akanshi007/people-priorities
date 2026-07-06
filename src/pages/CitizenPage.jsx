import CitizenForm from "../components/CitizenForm";

function CitizenPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Citizen Complaint Portal
        </h1>

        <p className="text-slate-500 mt-2">
          Report problems in your locality. AI will analyze and prioritize them.
        </p>

      </div>

      <CitizenForm />

    </div>
  );
}

export default CitizenPage;