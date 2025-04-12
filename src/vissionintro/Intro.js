import React from "react";
import "./intro.css";
import Vision from "./Vision";
import Marquee from "react-fast-marquee";
import t1 from "../assets/tech1.jpg";
import t2 from "../assets/tech2.jpg";
import t3 from "../assets/tech3.jpg";
import t4 from "../assets/header_pic.jpg";
import t5 from "../assets/tech4.jpg";
import intro from "../assets/fab lab intro img.jpeg";
import Sidetabs from "./Sidetabs";
export default function Intro() {
  return (
    <div className="whole">
      <Marquee speed={150} className="pics">
        <img src={t1} alt="pic" />
        <img src={t2} alt="pic" />
        <img src={t5} alt="pic" />
        <img src={t3} alt="pic" />
        <img src={t4} alt="pic" />
      </Marquee>
      <div className="content_intro">
        <div className="intro-container">
          <div className="intro-content">
            <h3>INTRODUCTION</h3>
            <p>
              The VLSI Design, Fabrication, and Characterization Facility at
              Jaypee Institute of Information Technology (JIIT), Noida, is a
              comprehensive, state-of-the-art academic and research
              infrastructure designed to support the complete lifecycle of Very
              Large-Scale Integration (VLSI) chip development—from system design
              to silicon realization and device-level testing. With a strong
              focus on hands-on learning, innovation, and research excellence,
              the facility offers end-to-end resources that span all major
              phases of VLSI technology: design specification, logic and circuit
              design, physical layout, semiconductor processing, and
              post-fabrication analysis. At the design level, the institute is
              equipped with industry-standard EDA tools including Cadence
              Virtuoso, Xilinx Vivado, Synopsys, and Mentor Graphics, enabling
              students and researchers to work on digital, analog, and
              mixed-signal IC design. The curriculum is carefully integrated
              with lab access, allowing learners to define system
              specifications, model architectures, write HDL code, simulate
              logic, verify timing, and generate GDSII layout files.
              Transitioning to fabrication, JIIT hosts a functional laboratory,
              where users are trained to handle photolithography, material
              deposition, etching, doping, and wafer cleaning processes.
              Equipment such as spin coaters, laser writer, RF Sputtering
              systems, thermal evaporators, 3- stack furnace and hot plates
              enable the fabrication of MOS capacitors, thin-film transistors,
              sensors, and test chips on silicon and glass substrates. The
              facility follows standard semiconductor processing protocols,
              emphasizing safety, contamination control, and accuracy in pattern
              transfer. Post-fabrication, the characterization lab offers a
              suite of equipment including semiconductor parameter analyzers,
              probe stations, and curve tracers that allow detailed electrical
              analysis of fabricated devices. Students and researchers are able
              to extract key parameters like threshold voltage,
              transconductance, capacitance, leakage current, and breakdown
              characteristics. The characterization process not only validates
              fabrication outcomes but also serves as a critical feedback loop
              for improving designs and process steps. What makes JIIT’s
              facility unique is its integration of both front-end (design and
              simulation) and back-end (fabrication and testing) workflows
              within a single academic ecosystem. It fosters multidisciplinary
              learning by bringing together concepts from microelectronics,
              physics, materials science, and computer engineering. Beyond
              classroom learning, the lab serves as a hub for research in MEMS,
              IoT sensors, biomedical chips, and energy-efficient electronics.
              It facilitates B.Tech., M.Tech., and Ph.D. level projects and has
              ongoing collaborations with reputed academic institutions and
              industry partners. Through workshops, internships, and funded
              research, the lab empowers students to become future-ready
              semiconductor professionals. With its emphasis on hands-on
              education, project-based learning, and applied research, the VLSI
              Design, Fabrication, and Characterization Facility at JIIT plays a
              vital role in shaping the next generation of innovators and
              technologists in the ever-evolving semiconductor industry.
            </p>
          </div>
          <div className="intro-image">
            <img src={intro} alt="into_image" />
          </div>
        </div>
      </div>
      {/* <div className="inaug2">
        <Marquee speed={120} className="inaug">
          <h2>Inauguration on 16 June,2024,11:00 AM in JIIT Campus !!&emsp;</h2>
        </Marquee>
      </div> */}
      <Sidetabs />
      <Vision />
    </div>
  );
}
