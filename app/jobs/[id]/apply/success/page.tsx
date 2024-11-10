import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Application Submitted!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your application. We will review it and get back to you
          soon.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-md font-bold hover:bg-green-600 transition-colors"
        >
          Back to Jobs
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
