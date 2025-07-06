import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import UrlCard from "./UrlCard";
const BASE_URL = import.meta.env.VITE_BASE_URL;



const Dashboard = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlList, setUrlList] = useState([]);
  const fullShortUrl = `${BASE_URL}/${shortUrl}`; 



  async function handleShortenUrl(e) {
    e.preventDefault();
    if(!longUrl) {
        return toast.error('Please Enter long URL.')
    }

    try {
        const res = await axios.post(BASE_URL + '/api/url/shorten', {url: longUrl}, {
            withCredentials: true
        });
        setShortUrl(res.data.shortURL.shortId);
    } catch(e) {
        console.log(e);
        toast.error( e.response?.data?.message ||'Internal server error!')
    }
  }

  async function handleDeleteUrl(id) {
    try {
      await axios.delete(`${BASE_URL}/api/url/${id}`, {
        withCredentials: true
      });
      toast.success("URL deleted successfully!");
      setUrlList(prev => prev.filter(url => url._id !== id));
    } catch (e) {
      console.error(e);
      toast.error(e.response?.data?.message || "Failed to delete URL!");
    }
  }  

  async function fetchUrlData() {
    try {
        const res = await axios.get(BASE_URL + '/api/url/list/', {withCredentials: true});
        setUrlList(res.data.foundEntry);
        console.log(res.data.foundEntry);
    } catch(e) {
        console.log(e);
    }
  }

  function handleCopyUrl() {
    navigator.clipboard.writeText(fullShortUrl);
    toast.success("Copied to clipboard!");
  }


  useEffect(()=>{
    fetchUrlData()
  }, [shortUrl])


  return (
    <main className="flex-1 bg-gray-50/10 relative z-10">
      {/* Dotted Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={ {backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px",}} />

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">Shorten URL</h2>

        {/* Shorten URL Form */}
        <div className="mb-10 bg-gray-200 px-6 py-10 rounded-xl shadow">
            <form onSubmit={handleShortenUrl} className="flex gap-4 mb-5" >
                <input type="url" placeholder="Enter URL to shorten" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} required className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
                <button type="submit" className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:opacity-90 transition">Shorten</button>
            </form>
            
            {shortUrl && urlList.length !== 0 && 
                (
                    <div className="flex items-center justify-center gap-3 text-center">
                        <span className="text-gray-800 font-medium"> Short URL: <a href={fullShortUrl} target="_blank" rel="noreferrer" className="text-pink-700 underline ml-1" > {fullShortUrl} </a></span>
                        <button onClick={handleCopyUrl} className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition" > Copy </button>
                    </div>
                )
            }
        </div>

        {/* URLs List */}
        {urlList.length == 0 &&  <p className="text-center">No URLs created yet. Shorten your url.</p>}
        {urlList.length !== 0 && 
            ( <div className="space-y-6">
                {urlList.map((url) => (
                    <UrlCard key={url._id} url={url} handleDeleteUrl={handleDeleteUrl}/>
                ))}
             </div>
            )
        }
      </div>
    </main>
  );
};

export default Dashboard;
