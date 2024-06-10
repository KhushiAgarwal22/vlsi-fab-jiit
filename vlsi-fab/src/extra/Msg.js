import React from "react";
import dean from '../assets/shweta.srivastava.jpg'
import './msg.css'
export default function Msg() {
  return (
    <div className="msg">
      <h1>Message from the HOD of Electronics and Communication Engineering</h1>
      <p>
        It is with great excitement that we announce the inauguration of our
        state-of-the-art VLSI Design, Fabrication, and Characterization
        Facility. This advanced lab represents a significant leap forward in our
        department's mission to foster innovation, research, and education in
        the field of Very-Large-Scale Integration (VLSI).</p>
        <h3>Key Highlights of the Facility:</h3> 
        <ul>
            <li>Cutting-Edge Tools and Technologies: Our facility is
        equipped with the latest in VLSI design software and fabrication
        equipment, providing our students and researchers with hands-on
        experience that is second to none.</li>
        <li>Research and Development Hub: This
        lab will serve as a focal point for pioneering research in semiconductor
        technology, enabling us to explore and solve complex challenges in the
        field.</li>
        <li>Industry Collaboration Opportunities: We are eager to
        collaborate with industry leaders to drive advancements in VLSI and
        semiconductor technologies, fostering a symbiotic relationship between
        academia and industry.</li>
        </ul>  
        <p>This achievement is a testament to the visionary leadership and unwavering support of our esteemed Chancellor, Shri Manoj
        Gaur Ji, whom we also celebrate on his 60th birthday. His dedication to
        excellence has been a driving force behind this monumental project.</p>
        <h3> Our
        Vision:</h3>
        <ul>
            <li>To provide a world-class education and research environment
        that equips our students with the skills and knowledge to excel in the
        ever-evolving electronics and semiconductor industries.</li>
        <li>To be at the
        forefront of technological innovation, contributing to the development
        of future electronic systems and devices.</li>
        </ul>
        <p>We invite students,
        researchers, industry professionals, and all visitors to explore our new
        facility and join us in this journey of discovery and innovation. For
        more information or to schedule a visit, please contact us at
        shweta.srivastava@jiit.ac.in Thank you for your continued support and
        interest in our department's endeavors.</p>
        <p>Warm regards,<br/>
         <img src={dean} className="dean"></img><br/>
         Prof.Shweta Srivastava <br/>
         Dean (A&R), <br/>
         Head of the Department Electronics and Communication Engineering</p>
    </div>
  );
}
