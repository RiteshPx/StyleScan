// import React from "react";

// const HomePage = () => {
//   return (
//     <div className="bg-pastelPink min-h-screen">
//       {/* Header */}
//       <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
//         <h1 className="text-xl font-bold text-darkerPink">YourProjectName</h1>
//         <nav className="flex gap-4">
//           <a href="#" className="text-textGray hover:text-darkerPink">Home</a>
//           <a href="#" className="text-textGray hover:text-darkerPink">How It Works</a>
//           <a href="#" className="text-textGray hover:text-darkerPink">Contact</a>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="text-center py-20">
//         <h2 className="text-4xl font-bold text-textGray mb-4">
//           Find Your Perfect Look!
//         </h2>
//         <p className="text-lg text-textGray mb-8">
//           Upload a photo to discover eyeglasses and outfits that match your unique style.
//         </p>
//         <button className="bg-darkerPink text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-pink-600">
//           Upload Your Photo
//         </button>
//       </main>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="w-16 h-16 mx-auto bg-darkerPink rounded-full flex items-center justify-center text-white text-2xl">
//               🖼️
//             </div>
//             <h3 className="text-xl font-semibold text-textGray mt-4">Face Shape Detection</h3>
//             <p className="text-textGray mt-2">
//               Analyze your face shape to find the perfect eyewear.
//             </p>
//           </div>
//           <div>
//             <div className="w-16 h-16 mx-auto bg-darkerPink rounded-full flex items-center justify-center text-white text-2xl">
//               🎨
//             </div>
//             <h3 className="text-xl font-semibold text-textGray mt-4">Skin Tone Analysis</h3>
//             <p className="text-textGray mt-2">
//               Match outfits and colors to your skin tone.
//             </p>
//           </div>
//           <div>
//             <div className="w-16 h-16 mx-auto bg-darkerPink rounded-full flex items-center justify-center text-white text-2xl">
//               💡
//             </div>
//             <h3 className="text-xl font-semibold text-textGray mt-4">Personalized Recommendations</h3>
//             <p className="text-textGray mt-2">
//               Get tailored suggestions for eyeglasses and clothing.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-darkerPink text-white py-4 text-center">
//         <p>© 2024 YourProjectName. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate=useNavigate();

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
    //   style={{ backgroundColor: "#16FFBD" }}
    >
      <div
        className="w-full max-w-md bg-background2 p-6 rounded-lg shadow-lg"
        // style={{ backgroundColor: "#12C998" }}
      >
        <h2
          className="text-2xl font-bold text-center text-black mb-4"
            >
          User Registration Form
        </h2>
        <p className="text-center text-white mb-6">
          Fill in your details below and upload an image. You’ll see the image preview before submitting the form.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-secondary font-semibold mb-1"
              style={{ color: "black" }}
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
              className="block text-black font-semibold mb-1"
              // style={{ color: "#F070A1" }}
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

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-secondary  font-semibold mb-1"
              style={{ color: "black" }}
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

// export default UserForm;
