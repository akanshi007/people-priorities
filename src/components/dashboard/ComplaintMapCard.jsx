import ComplaintMap from "../ComplaintMap";

function ComplaintMapCard({ complaints }) {
    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-10">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-900">
                    🗺️ Complaint Locations
                </h2>

                <p className="text-slate-500 mt-2">
                    View all complaints submitted across your constituency.
                </p>

            </div>

            {complaints.some((item) => item.location) ? (

                <ComplaintMap complaints={complaints} />

            ) : (

                <div className="text-center py-16 text-slate-500">

                    <h3 className="text-xl font-semibold">
                        No Complaint Locations Available
                    </h3>

                    <p className="mt-2">
                        Complaint locations will appear here after citizens submit complaints.
                    </p>

                </div>

            )}

        </div>
    );
}

export default ComplaintMapCard;