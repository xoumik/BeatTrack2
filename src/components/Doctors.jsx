import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const Doctors = () => {
  const data = [
    {
      img: doc5,
      name: "Dr. Sandeep Saha",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: doc1,
      name: "Dr. Shoumik Roy",
      specialties: "Cardiologist",
    },
    {
      img: doc6,
      name: "Dr. Koushik Chetia",
      specialties: "Pediatrician",
    },
    {
      img: doc4,
      name: "Dr. Victoria Nguyen",
      specialties: "Neurologist",
    },
    {
      img: doc2,
      name: "Dr. Anna Carter",
      specialties: "Dermatologist",
    },
    {
      img: doc3,
      name: "Dr. Hughie Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
