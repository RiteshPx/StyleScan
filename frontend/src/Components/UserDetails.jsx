import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from '../Assests/images/imgForm.jpg';

export const UserDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    height: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Handle image upload
    if (name === "image" && files.length > 0) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        image: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    navigate('/recommands');
    // alert("Form submitted successfully!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-primary p-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="w-full max-w-md mt-16 bg-white p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <h2
          className="text-3xl font-bold text-center text-primary mb-4"
          style={{ color: "#C34271" }}
        >
          User Registration Form
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Fill in your details below and upload an image. You’ll see the image preview before submitting the form.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-secondary font-semibold mb-1"
              style={{ color: "#439F76" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-accent p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-secondary font-semibold mb-1"
              style={{ color: "#439F76" }}
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-accent p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label
              htmlFor="height"
              className="block text-secondary font-semibold mb-1"
              style={{ color: "#439F76" }}
            >
              Height (in cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full border border-accent p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your height"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-secondary font-semibold mb-1"
              style={{ color: "#439F76" }}
            >
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-accent p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-4 text-center">
              <h3 className="text-primary mb-2" style={{ color: "#C34271" }}>
                Image Preview:
              </h3>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 rounded-full mx-auto border border-accent"
                style={{ borderColor: "#439F76" }}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition"
              style={{ backgroundColor: "#C34271" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
