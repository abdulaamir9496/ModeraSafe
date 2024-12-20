import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';

const treeData = {
    "Suitable For All": [],
    "Illegal Products or Services": {
        "Drugs and Controlled Substances": {
            "Illegal Drugs": ["Heroin", "Cocaine", "Methamphetamine", "Ecstasy"],
            "Prescription Drugs": ["OxyContin", "Adderall", "Xanax", "Percocet"],
            "Performance-Enhancing Drugs": ["Anabolic Steroids", "HGH", "EPO"]
        },
        "Weapons and Firearms": {
            "Unregistered Firearms": ["Handguns", "Assault Rifles", "Shotguns"],
            "Illegal Ammunition": ["Armor-Piercing Rounds", "Explosive Rounds"],
            "Explosives": ["Homemade Bombs", "Dynamite", "Illegal Fireworks"]
        },
        "Counterfeit Goods": {
            "Fake Designer Products": ["Handbags", "Watches", "Shoes"],
            "Pirated Media": ["Movies", "Music", "Software"],
            "Fake Currency": ["Banknotes", "Coins", "Credit Cards"]
        },
        "Human Trafficking and Exploitation": {
            "Sex Trafficking": ["Forced Prostitution", "Exploitation of Minors"],
            "Labor Exploitation": ["Forced Labor", "Domestic Servitude"],
            "Child Exploitation": ["Child Labor", "Child Pornography"]
        }
        // Add more categories as needed
    },
    "Potential Human Exploitation": ["Forced Labor", "Human Trafficking"],
    "Recreational Drugs and Drugs Paraphernalia": ["Cannabis", "Drug Kits"],
    "Documents, Currency and Financial Instruments": ["Counterfeit Currency"],
    "Recalled Products (Appeals ONLY)": [],
    "Stolen Goods": [],
    "Weapons, Ammunition or Explosives": ["Guns", "Ammunition"],
    "Hate Material": ["Propaganda"],
    "Animal Sales": ["Endangered Animals"],
    "Alcohol Products and Services": ["Alcoholic Beverages"],
    "Discrimination": ["Racial Discrimination", "Gender Discrimination"]
};

const Section3 = () => {
    const [query, setQuery] = useState('');
    const [currentPath, setCurrentPath] = useState([]); // Tracks the breadcrumb path
    const [currentTags, setCurrentTags] = useState(Object.keys(treeData)); // Initial tags to display
    const [isFinalTag, setIsFinalTag] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${query}`);
    };

    const handleTagClick = (tag) => {
        const nextLevel = currentPath.reduce((acc, key) => acc[key], treeData)[tag];
        setCurrentPath((prev) => [...prev, tag]);

        if (typeof nextLevel === "object" && !Array.isArray(nextLevel)) {
            setCurrentTags(Object.keys(nextLevel));
            setIsFinalTag(false);
        } else if (Array.isArray(nextLevel)) {
            setCurrentTags(nextLevel);
            setIsFinalTag(true);
        } else {
            setCurrentTags([]);
            setIsFinalTag(true);
        }
    };

    const handleBreadcrumbReset = () => {
        setCurrentPath([]);
        setCurrentTags(Object.keys(treeData));
        setIsFinalTag(false);
    };

    const generateLink = (tag) =>
        `https://example.com/policies/${tag.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className="p-6">
            <h1 className="font-bold pt-4 pb-4">
                Does this product violate commerce policies? Choose the relevant policy
            </h1>
            <form
                onSubmit={handleSearch}
                className="flex items-center border border-gray-300 rounded-lg w-10/12"
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>

            <div className="mt-4 mb-4">
                {currentPath.length > 0 && (
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleBreadcrumbReset}
                            className="text-blue-500 underline"
                        >
                            Reset
                        </button>
                        {currentPath.map((tag, idx) => (
                            <span key={idx} className="text-gray-500">
                                {tag} {idx < currentPath.length - 1 && '>'}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-2">Violation Policy</th>
                            <th className="text-left p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTags.map((tag, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-2 flex items-center">
                                    <div className="w-full border-r pr-2">{tag}</div>
                                    <button
                                        onClick={() => handleTagClick(tag)}
                                        className="text-blue-500 underline ml-2"
                                    >
                                        Open
                                    </button>
                                </td>
                                <td className="p-2">
                                    <a
                                        href={generateLink(tag)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkIcon className="text-blue-500 cursor-pointer" />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 p-4 bg-gray-100 text-center">

                <button
                    disabled={!isFinalTag}
                    onClick={() => {
                        if (isFinalTag) {
                            const jobId = Math.floor(Math.random() * 1000000); // Generate a random job ID
                            alert(`Job ID ${jobId} successfully submitted!`);
                        }
                    }}
                    className={`px-4 py-2 rounded-lg ${
                        isFinalTag ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                    }`}
                >
                    Submit
                </button>

                    {/* <button
                        disabled={!isFinalTag}
                        className={`px-4 py-2 rounded-lg ${
                            isFinalTag ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                        }`}
                    >
                        Submit
                    </button> */}
                </div>
                
            </div>
        </div>
    );
};

export default Section3;


// Declare treeData at the top, before using it
// const treeData = {
//     "Suitable For All": [],
//     "Illegal Products or Services": ["Counterfeit Goods", "Unlicensed Products"],
//     "Potential Human Exploitation": ["Forced Labor", "Human Trafficking"],
//     "Recreational Drugs and Drugs Paraphernalia": ["Cannabis", "Drug Kits"],
//     "Documents, Currency and Financial Instruments": ["Counterfeit Currency"],
//     "Recalled Products (Appeals ONLY)": [],
//     "Stolen Goods": [],
//     "Weapons, ammunition or explosives": ["Guns", "Ammunition"],
//     "Hate Material": ["Propaganda"],
//     "Animal Sales": ["Endangered Animals"],
//     "Alcohol products and services": ["Alcoholic Beverages"],
//     "Discrimination": ["Racial Discrimination", "Gender Discrimination"],
// };

// const Section3 = () => {
//     const [query, setQuery] = useState('');
//   const [currentPath, setCurrentPath] = useState([]); // Tracks the breadcrumb path
//   const [currentTags, setCurrentTags] = useState(Object.keys(treeData)); // Initial tags to display
//     const [isFinalTag, setIsFinalTag] = useState(false);

//     const handleSearch = (e) => {
//     e.preventDefault();
//     alert(`Searching for: ${query}`);
//     };

//   // Handle tag click
//     const handleTagClick = (tag) => {
//     setCurrentPath((prev) => [...prev, tag]);
//     const childTags = treeData[tag];
//     if (childTags && childTags.length > 0) {
//         setCurrentTags(childTags);
//         setIsFinalTag(false);
//     } else {
//         setCurrentTags([]);
//         setIsFinalTag(true);
//     }
//     };

//   // Reset to the top-level tags
//     const handleBreadcrumbReset = () => {
//     setCurrentPath([]);
//     setCurrentTags(Object.keys(treeData));
//     setIsFinalTag(false);
//     };

//     const generateLink = (tag) =>
//     `https://example.com/policies/${tag.replace(/\s+/g, '-').toLowerCase()}`;

//     return (
//     <div className="p-6">
//       {/* Search Section */}
//         <h1 className="font-bold pt-4 pb-4">
//         Does this product violate commerce policies? Choose the relevant policy
//         </h1>
//         <form
//         onSubmit={handleSearch}
//         className="flex items-center border border-gray-300 rounded-lg w-10/12"
//         >
//         <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button type="submit">
//             <SearchIcon />
//         </button>
//         </form>

//       {/* Breadcrumb */}
//         <div className="mt-4 mb-4">
//         {currentPath.length > 0 && (
//             <div className="flex items-center space-x-2">
//             <button
//                 onClick={handleBreadcrumbReset}
//                 className="text-blue-500 underline"
//             >
//                 Reset
//             </button>
//             {currentPath.map((tag, idx) => (
//                 <span key={idx} className="text-gray-500">
//                 {tag} {idx < currentPath.length - 1 && '>'}
//                 </span>
//             ))}
//             </div>
//         )}
//         </div>

//       {/* Tagging Tree */}
//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
//         <table className="table-auto w-full">
//             <thead>
//             <tr className="border-b">
//                 <th className="text-left p-2">Violation Policy</th>
//                 <th className="text-left p-2">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {currentTags.map((tag, idx) => (
//                 <tr key={idx} className="border-t">
//                 <td className="p-2 flex items-center">
//                     <div className="w-full border-r pr-2">{tag}</div>
//                     <button
//                     onClick={() => handleTagClick(tag)}
//                     className="text-blue-500 underline ml-2"
//                     >
//                     Open
//                     </button>
//                 </td>
//                 <td className="p-2">
//                     <a
//                     href={generateLink(tag)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                     <LinkIcon className="text-blue-500 cursor-pointer" />
//                     </a>
//                 </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>

//         {/* Submit Button */}
//         <div className="mt-4 p-4 bg-gray-100 text-center">
//             <button
//             disabled={!isFinalTag}
//             className={`px-4 py-2 rounded-lg ${
//                 isFinalTag ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
//                 }`}
//                     >
//                         Submit
//             </button>
//         </div>
//     </div>
// </div>
//     );
// };

// export default Section3;


//     const handleTagClick = (tag) => {
//         setCurrentPath((prev) => [...prev, tag]);
//         const childTags = treeData[tag];
//         if (childTags && childTags.length > 0) {
//         setCurrentTags(childTags);
//         setIsFinalTag(false);
//     } else {
//         setCurrentTags([]);
//         setIsFinalTag(true);
//     }
//     };

//   // Reset to the top-level tags
//     const handleBreadcrumbReset = () => {
//         setCurrentPath([]);
//         setCurrentTags(Object.keys(treeData));
//         setIsFinalTag(false);
//     };

//     const generateLink = (tag) =>
//     `https://example.com/policies/${tag.replace(/\s+/g, '-').toLowerCase()}`;

//     return (
//     <div className="p-6">
//       {/* Search Section */}
//         <h1 className="font-bold pt-4 pb-4">
//         Does this product violate commerce policies? Choose the relevant policy
//         </h1>
//         <form
//         onSubmit={handleSearch}
//         className="flex items-center border border-gray-300 rounded-lg w-10/12"
//         >
//         <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="pl-4 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button type="submit">
//             <SearchIcon />
//         </button>
//         </form>

//       {/* Breadcrumb */}
//         <div className="mt-4 mb-4">
//         {currentPath.length > 0 && (
//             <div className="flex items-center space-x-2">
//             <button
//                 onClick={handleBreadcrumbReset}
//                 className="text-blue-500 underline"
//             >
//                 Reset
//             </button>
//             {currentPath.map((tag, idx) => (
//                 <span key={idx} className="text-gray-500">
//                 {tag} {idx < currentPath.length - 1 && '>'}
//                 </span>
//             ))}
//             </div>
//         )}
//         </div>

//       {/* Tagging Tree */}
//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
//         <table className="table-auto w-full">
//             <thead>
//             <tr className="border-b">
//                 <th className="text-left p-2">Violation Policy</th>
//                 <th className="text-left p-2">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {currentTags.map((tag, idx) => (
//                 <tr key={idx} className="border-t">
//                 <td className="p-2 flex items-center">
//                     <div className="w-full border-r pr-2">{tag}</div>
//                     <button
//                     onClick={() => handleTagClick(tag)}
//                     className="text-blue-500 underline ml-2"
//                     >
//                     Open
//                     </button>
//                 </td>
//                 <td className="p-2">
//                     <a
//                     href={generateLink(tag)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                     <LinkIcon className="text-blue-500 cursor-pointer" />
//                     </a>
//                 </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>

//         {/* Submit Button */}
//         <div className="mt-4 p-4 bg-gray-100 text-center">
//             <button
//             disabled={!isFinalTag}
//             className={`px-4 py-2 rounded-lg ${
//                 isFinalTag ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
//             }`}
//             >
//             Submit
//             </button>
//         </div>
//         </div>
//     </div>
//     );
// };

// export default Section3;
