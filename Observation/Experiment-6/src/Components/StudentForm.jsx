import React, { useState } from "react";
export default function StudentForm() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
age: "",
dob: "",
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
console.log("Final Form Data:", formData);
alert("Form Submitted! Check Console.");};
return (
<div style={{ display: "flex", gap: "40px", padding: "20px", fontFamily: "Arial" }}>
{/* Form Section */}
<div style={{ flex: 1, border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
<h2>Student Registration</h2>
<form onSubmit={handleSubmit}>
<label>Name: </label> <input type="text" name="name" onChange={handleChange}
/><br/><br/>
<label>Email: </label> <input type="email" name="email" onChange={handleChange}
/><br/><br/>
<label>Gender: </label>
<input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
<input type="radio" name="gender" value="Female" onChange={handleChange}/>
Female<br/><br/>
<label>Course: </label>
<select name="course" onChange={handleChange}>
<option value="">Select</option>
<option value="BTech">BTech</option>
<option value="MCA">MCA</option>
</select><br/><br/>
<label>Skills: </label>
<input type="checkbox" value="JavaScript" onChange={handleChange}/> JS
<input type="checkbox" value="React" onChange={handleChange}/> React<br/><br/>
<label>Bio: </label><br/>
<textarea name="bio" onChange={handleChange}></textarea><br/><br/>
<button type="submit">Submit</button>
</form>
</div>
{/* Live Preview Section */}
<div style={{ flex: 1, background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
<h2>Live Preview (State)</h2>
<p><strong>Name:</strong> {formData.name}</p>
<p><strong>Email:</strong> {formData.email}</p>
<p><strong>Course:</strong> {formData.course}</p>
<p><strong>Skills:</strong> {formData.skills.join(", ")}</p>
</div>
</div>
);
}