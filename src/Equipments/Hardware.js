import spinCoater from '../assets/equip1.jpg';
import laserWriter from '../assets/equip2.jpg';
import rfSputtering from '../assets/equip3.jpg';
import furnace from '../assets/equip4.jpg';
import thermalEvaporator from '../assets/equip5.png';
import keysightIVCV from '../assets/equip6.jpg';

const Hardware = [
  {
    id: 1,
    img: spinCoater,
    Heading: "Spin Coater",
    Content:
      "A spin coater is essential in microfabrication for applying uniform thin films to flat substrates. By depositing a small amount of a solution onto the center of a substrate and spinning it at high speed, the centrifugal force spreads the solution into a thin, even layer, which is crucial for processes like photolithography.",
  },
  {
    id: 2,
    img: laserWriter,
    Heading: "Laser Writer",
    Content:
      "A laser writer is used in microlithography to directly pattern microstructures onto substrates. This tool uses a focused laser beam to write the desired patterns, eliminating the need for masks. It's particularly useful for rapid prototyping and producing high-resolution features.",
  },
  {
    id: 3,
    img: rfSputtering,
    Heading: "RF Sputtering",
    Content:
      "RF sputtering is a method of depositing thin films by sputtering materials from a target to a substrate using radio frequency energy. It's particularly effective for insulating materials and provides excellent uniformity and adhesion, commonly used in the fabrication of dielectric and optical films.",
  },
  {
    id: 4,
    img: furnace,
    Heading: "Furnace",
    Content:
      "In microfabrication, furnaces are used for processes such as annealing, diffusion, and oxidation. These high-temperature treatments are essential for altering the physical, chemical, and electrical properties of materials, crucial for semiconductor processing.",
  },
  {
    id: 5,
    img: thermalEvaporator,
    Heading: "Thermal Evaporator",
    Content:
      "This device is used in thin film deposition. It operates under vacuum conditions to heat a material until it evaporates and condenses onto a cooler substrate, forming a thin film. This method is widely used in the creation of metal layers for electronic and optical devices.",
  },
  {
    id: 6,
    img: keysightIVCV,
    Heading: "Keysight IV/CV Characterization",
    Content:
      "Keysight Technologies provides advanced solutions for IV (current-voltage) and CV (capacitance-voltage) characterization, which are critical for analyzing the electrical properties of materials and semiconductor devices. These characterization tools are essential for researchers and engineers to evaluate the quality and performance of electronic components such as diodes, transistors, and capacitors.",
  },
];

export default Hardware;
