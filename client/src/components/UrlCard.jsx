import { Link } from "react-router-dom"
const BASE_URL = import.meta.env.VITE_BASE_URL;



const UrlCard = ({url, handleDeleteUrl}) => {
  return (
    <div key={url._id} className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">    
                {/* Left part */}
                <div className=" md:max-w-[60%]">
                  <p className="text-gray-700">
                    <span className="font-medium">Original:</span>{" "}
                    <a href={`${BASE_URL}/${url.redirectUrl}`} target="_blank" rel="noreferrer" className="text-pink-700 underline break-all"> {url.redirectUrl} </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Short:</span>{" "}
                    <a href={`${BASE_URL}/${url.shortId}`} target="_blank" rel="noreferrer" className="text-pink-700 underline break-all" > {`${BASE_URL}/${url.shortId}`} </a>
                  </p>
                  <p className="text-gray-700"> <span className="font-medium">Clicks:</span> {url.numberOfClicks} </p>
                </div>

                {/* Right part */}
                <div className="flex items-center gap-4">
                  <img src={url.qrCode} alt="QR Code" className="w-30  border rounded-md" />
                  <button onClick={() => handleDeleteUrl(url._id)} className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition cursor-pointer" > Delete </button>
                </div>
              </div>
  )
}

export default UrlCard;