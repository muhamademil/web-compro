import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access a non-existent route.");

    // Blokir back navigation
    window.history.pushState(null, "", window.location.href);
    const handleBackButton = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener("popstate", handleBackButton);

    // ✅ Timer redirect ke home setelah 5 detik (5000ms)
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    // Cleanup event listener & timer saat komponen unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
      clearTimeout(timer);
    };
  }, []);

  const redirectToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-4">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          You will be redirected to the homepage in 5 seconds...
        </p>
        <button
          onClick={redirectToHome}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
