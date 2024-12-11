// import { ArrowRightEndOnRectangleIcon, LinkIcon } from "@heroicons/react/24/solid"
// import { ChevronLeftRounded } from "@mui/icons-material"
// import BugReportOutlined from "@mui/icons-material/BugReportOutlined"
// import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded"
// import RefreshSharp from "@mui/icons-material/RefreshSharp"

// const NavbarBottom = () => {
//     return (
//         <>
//             <nav className="p-2 bg-gray-200 text-white">
//                 <ul className="flex flex-nowrap items-center gap-3 h-7 overflow-x-auto">
//                     <a href="http://" className="bg-slate-500 rounded px-5 p-0">
//                         Review
//                     </a>
//                     <p className="bg-slate-500 rounded px-3 p-0">
//                         [Commerce] [Instagram] Product Review - Product</p>
//                     <p className="bg-slate-500 rounded px-3 p-0">
//                         CROW_GENERIC_LABELING
//                     </p>
//                     <a href="http://" className="bg-slate-500 rounded px-3 p-0">442294913843456</a>
//                     <a href="http://" className="bg-slate-500 rounded px-3 p-0">
//                         <LinkIcon className="h-6 w-6" />
//                     </a>
//                     <a href="http://" className="bg-slate-500 rounded px-3 p-0">
//                         <RefreshSharp className="h-6 w-6" /> Refresh Job</a>
//                     <button className="bg-slate-500 rounded px-3 p-0">
//                         <BugReportOutlined className="h-6 w-6"/>
//                     </button>
//                     <button className="bg-slate-500 rounded px-3 p-0">
//                         <ChevronLeftRounded className="h-6 w-6"/>
//                         Prev</button>
//                     <p className="bg-slate-500 rounded px-3 p-0">14 out of 20</p>
//                     <button className="bg-slate-500 rounded px-3 p-0">Next
//                         <ChevronRightRounded className="h-6 w-6"/>
//                     </button>
//                     <button className="bg-slate-500 rounded px-3 p-0">
//                         <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
//                     </button>
//                 </ul>
//             </nav>
//         </>
//     )
// }

// export default NavbarBottom


import { ArrowRightEndOnRectangleIcon, LinkIcon } from "@heroicons/react/24/solid";
import { ChevronLeftRounded } from "@mui/icons-material";
import BugReportOutlined from "@mui/icons-material/BugReportOutlined";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import RefreshSharp from "@mui/icons-material/RefreshSharp";

const NavbarBottom = () => {
    return (
        <>
            <nav className="p-2 bg-gray-200">
                <ul className="flex flex-nowrap items-center gap-3 h-7 overflow-x-auto">
                    {/* Use text-ellipsis and whitespace-nowrap for long text */}
                    <a href="http://" className="bg-slate-500 rounded px-5 py-1">
                        Review
                    </a>
                    <p className="bg-slate-500 rounded px-3 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        [Commerce] [Instagram] Product Review - Product
                    </p>
                    <p className="bg-slate-500 rounded px-3 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        CROW_GENERIC_LABELING
                    </p>
                    <a href="http://" className="bg-slate-500 rounded px-3 py-1">
                        442294913843456
                    </a>
                    <a href="http://" className="bg-slate-500 rounded px-3 py-1 flex items-center">
                        <LinkIcon className="h-6 w-6" />
                    </a>
                    <a href="http://" className="bg-slate-500 rounded px-3 py-1 flex items-center">
                        <RefreshSharp className="h-6 w-6" /> Refresh Job
                    </a>
                    <button className="bg-slate-500 rounded px-3 py-1 flex items-center">
                        <BugReportOutlined className="h-6 w-6" />
                    </button>
                    <button className="bg-slate-500 rounded px-3 py-1 flex items-center">
                        <ChevronLeftRounded className="h-6 w-6" /> Prev
                    </button>
                    <p className="bg-slate-500 rounded px-3 py-1 whitespace-nowrap">
                        14 out of 20
                    </p>
                    <button className="bg-slate-500 rounded px-3 py-1 flex items-center">
                        Next <ChevronRightRounded className="h-6 w-6" />
                    </button>
                    <button className="bg-slate-500 rounded px-3 py-1">
                        <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                    </button>
                </ul>
            </nav>
        </>
    );
};

export default NavbarBottom;
