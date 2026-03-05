import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    course: "",
    skills: [],
    bio: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(skill => skill !== value);
      }

      setFormData({ ...formData, skills: updatedSkills });

    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted");
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Text */}
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br /><br />

        {/* Email */}
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <br /><br />

        {/* Password */}
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <br /><br />

        {/* Number */}
        <label>Age:</label>
        <input type="number" name="age" onChange={handleChange} />
        <br /><br />

        {/* Date */}
        <label>Date of Birth:</label>
        <input type="date" name="dob" onChange={handleChange} />
        <br /><br />

        {/* Radio */}
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange}/> Female
        <br /><br />

        {/* Select */}
        <label>Course:</label>
        <select name="course" onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="BTech">BTech</option>
          <option value="BSc">BSc</option>
          <option value="MCA">MCA</option>
        </select>
        <br /><br />

        {/* Checkbox */}
        <label>Skills:</label>
        <input type="checkbox" value="JavaScript" onChange={handleChange}/> JavaScript
        <input type="checkbox" value="React" onChange={handleChange}/> React
        <input type="checkbox" value="Node" onChange={handleChange}/> Node
        <br /><br />

        {/* Textarea */}
        <label>Bio:</label>
        <textarea name="bio" onChange={handleChange}></textarea>
        <br /><br />

        {/* File Upload */}
        <label>Upload Resume:</label>
        <input type="file" onChange={handleFileChange} />
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;