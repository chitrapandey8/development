import React from 'react'
import Navbar from './navbar'


type PersonInfo = {
  title: string;
  description: string;
};

const ambedkarData: PersonInfo[] = [
  {
    title: "Introduction",
    description:
      "Dr. Bhimrao Ramji Ambedkar (1891–1956), popularly known as Babasaheb Ambedkar, was a great leader, social reformer, and the chief architect of the Indian Constitution."
  },
  {
    title: "Early Life and Education",       
    description:
      "He was born on 14 April 1891 in Mhow, Madhya Pradesh. Despite facing social discrimination, he completed higher education from Columbia University and the London School of Economics."
  },
  {
    title: "Role in Indian Constitution",
    description:
      "He was the Chairman of the Drafting Committee of the Indian Constitution and ensured equality, justice, and fundamental rights for all citizens."
  },
  {
    title: "Social Reforms",
    description:
      "He fought against untouchability and worked for the upliftment of Dalits, women, and marginalized communities. In 1956, he converted to Buddhism."
  },
  {
    title: "Legacy",
    description:
      "His birthday, 14 April, is celebrated as Ambedkar Jayanti. He is remembered as a champion of equality and social justice."
  }
];




const Mainpage = () => {



  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default Mainpage
