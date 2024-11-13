/* eslint-disable */
// @ts-ignore:
"use client";

import { jobListings } from "@/utils/data";
import { use, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

const ApplyPage = ({ params }: Props) => {
  const router = useRouter();
  const { id } = use(params);
  const job = jobListings[id];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const validateForm = () => {
    const newErrors = {
      fullName: formData.fullName ? "" : "Full Name is required",
      email: /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is invalid",
      phone: /^\d{10}$/.test(formData.phone) ? "" : "Phone number is invalid",
      coverLetter: formData.coverLetter ? "" : "Cover Letter is required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Redirect to success page or show success message
    router.push(`/jobs/${id}/apply/success`);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Apply for {job.title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                required
                rows={6}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.coverLetter}
                onChange={handleChange}
              />
              {errors.coverLetter && (
                <p className="text-red-500 text-sm">{errors.coverLetter}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition-colors disabled:bg-green-300"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
