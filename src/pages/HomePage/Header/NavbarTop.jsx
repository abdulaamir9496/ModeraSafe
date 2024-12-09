import { BellIcon, GlobeAmericasIcon,  } from "@heroicons/react/16/solid"
import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"


const NavbarTop = () => {
    return (
        <>
            <header>
                <nav className="flex justify-between items-center h-10 bg-cyan-900 text-white pl-4 pr-4">
                    {/* Left Corner Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex px-3 py-0 bg-slate-400 rounded gap-2">SRT 
                            <FontAwesomeIcon icon={faLayerGroup} className="h-6 w-6"/>
                        </button>
                        <button className="px-3 py-0 bg-slate-400 rounded">Ads Integrity</button>
                        <button className="px-3 py-0 bg-slate-400 rounded text-wrap hover:text-balance">Key Status Last 12 Hours</button>
                        <button className="flex px-3 py-0 bg-slate-400 rounded gap-2">
                            <BriefcaseIcon className="h-6 w-6"/> 0  
                        </button>
                    </div>
                    
                    {/* Right Corner Buttons */}
                    <div className="flex space-x-4">
                        <button className="px-3 py-0 bg-cyan-600 rounded">
                            <BellIcon className="h-6 w-6" />
                        </button>
                        <button className="px-3 py-0 bg-green-400 rounded">
                            <GlobeAmericasIcon className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )   
}

export default NavbarTop
