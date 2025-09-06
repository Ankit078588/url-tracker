const Loader = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-50 to-white">
        <div className="relative flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          
          {/* Text */}
          <p className="mt-4 text-lg font-semibold text-pink-600 animate-pulse">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
};
  
export default Loader;
  