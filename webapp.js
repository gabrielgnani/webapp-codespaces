//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req, res) {
    res.redirect("/home");
});

app.get("/home", function(req,res) {
    res.send(`
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 30px;">
            <h2 style="font-size: 24px; margin-bottom: 10px;">Welcome to My Node.js Website! Using github codespaces. </h2>
            <p style="font-size: 16px; line-height: 1.5;">
                Hi there, welcome to my first ever Node.js website! I built this site using the powerful Node.js runtime, which helped me create a fast and reliable web application. Whether you're a Node.js expert or just curious about this technology, I'm excited to have you here.
            </p>
            <button onclick="location.href='/contact'">Contact Me</button>
            <button onclick="location.href='/bio'">About Me</button>
        </div>
    `);
});


//contact page
app.get("/contact", function(req,res) {
    res.send(`
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 30px;">
            <h2 style="font-size: 24px; margin-bottom: 10px;">Contact Me</h2>
            <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="margin-bottom: 10px;">
                    <strong>Name:</strong> Gnanesh Methari
                </li>
                <li style="margin-bottom: 10px;">
                    <strong>Email:</strong> Gnanesh.methari@franklin.edu
                </li>
                <li>
                    <strong>Phone:</strong> +1 616 920 4560
                </li>
            </ul>
            <button onclick="location.href='/home'">Home</button>
        </div>
    `);
});

//Bio page
app.get("/bio", function(req, res) {
	res.send(`
	<div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 30px;">
	<h2 style="font-size: 24px; margin-bottom: 10px;">About Me</h2>
	<p style="font-size: 16px; line-height: 1.5; text-align: center;">
	  Hi there! My name is Gnanesh Methari, and I'm a cybersecurity enthusiast currently studying in my last semester of Itec 660 Web Development and Deployment, with Cybersecurity as my elective. With over 4 years of IT experience under my belt, I'm always eager to learn and take on new challenges in the field. I hold certifications like CompTIA Security+ and PCEP and strive to stay up-to-date with the latest security trends and technologies.
	</p>
    <button onclick="location.href='/home'">Home</button>
  </div>
`);
});


app.listen(8002)