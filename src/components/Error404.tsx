const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go Back Home
      </a>
    </div>
  );
};

export default Error404;
