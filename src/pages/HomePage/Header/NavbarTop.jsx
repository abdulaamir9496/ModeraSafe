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
                        <a href="https://www.veed.io/" target="_blank" rel="noopener noreferrer">
                        {/* <a href="https://www.kapwing.com/"></a> */}
                            <button className="flex px-3 py-0 bg-slate-400 rounded gap-2">SRT 
                                <FontAwesomeIcon icon={faLayerGroup} className="h-6 w-6"/>
                            </button>
                        </a>
                        <a href="https://www.facebook.com/marketplace/" target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-0 bg-slate-400 rounded">Ads Integrity</button>
                        </a>
                        <a href="https://hubstaff.com/employee-scheduling-software" target="_blank" rel="noopener noreferrer">
                        {/* <a href="https://clockify.me/timekeeper-software"></a> */}
                            <button className="px-3 py-0 bg-slate-400 rounded text-wrap hover:text-balance">Key Status Last 12 Hours</button>
                        </a>
                        <button className="flex px-3 py-0 bg-slate-400 rounded gap-2">
                            <BriefcaseIcon className="h-6 w-6"/> 0  
                        </button>
                    </div>
                    
                    {/* Right Corner Buttons */}
                    <div className="flex space-x-4">
                        <a href="https://www.magicbell.com/" target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-0 bg-cyan-600 rounded">
                                <BellIcon className="h-6 w-6" />
                            </button>
                        </a>
                        <a href="https://www.consumerreports.org/" target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-0 bg-green-400 rounded">
                                <GlobeAmericasIcon className="h-6 w-6" />
                            </button>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )   
}

export default NavbarTop
