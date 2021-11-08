import React, { useState } from "react";
import Card from "../Cards";
import Con from "./Service.style";
import { services } from "../../data/services.js";
import Form from "../../components/Form";
import ServiceInfo from "../../components/Form/ServiceInfo";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <Con id="services">
      {/* <h1>Services</h1> */}
      <Con.Services>
        {services.map((service, index) => (
          // <Card
          //   key={index}
          //   image={service.src}
          //   title={service.title}
          //   description={service.description}
          //   setIsModalOpen={setIsModalOpen}
          //   setInfoModal={setInfoModal}
          // />
          <Con.Service>
            <h3>{service.title}</h3>
            <div>
              <img src={service.src} alt={service.title}/>
            </div>
            <p>{service.description}</p>
          </Con.Service>
        ))}
      </Con.Services>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ServiceInfo infoModal={infoModal} setInfoModal={setInfoModal} />
    </Con>
  );
}
