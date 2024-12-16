const Section1 = () => {
    return (
        <>
            <div className="p-3 bg-gray-200">
                <div className="flex-1 p-4">
                    <p className="text-lg font-bold">Product Preview</p>
                    <p className="text-sm text-gray-600">4229864103693989</p>
                    <p className="text-sm text-red-500">This is NOT a standard Commerce Product.</p>
                    <p className="mt-4 text-gray-700">
                        Contents in the product that need to be reviewed:
                    </p>
                </div>

                <div className="overflow-x-auto mt-4">
                    <table className="table-auto w-full border border-gray-300 text-sm bg-white">
                        <thead className="bg-gray-300 text-gray-800">
                            <tr>
                                <th className="border px-4 py-2">Type</th>
                                <th className="border px-4 py-2">Hashable Content</th>
                                <th className="border px-4 py-2">Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Title Text",
                                "Body Text",
                                "Image",
                                "Landing Page",
                                "Category",
                                "Retailer Category",
                                "Normalized Category",
                            ].map((type, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border px-4 py-2">{type}</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <p className="text-lg font-semibold">Product Video</p>
                    <p className="text-lg font-semibold">Body Text Translation</p>
                </div>
            </div>
        </>
    );
};

export default Section1;
