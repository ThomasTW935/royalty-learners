import React, { useState } from "react";
import Card from "../../components/Cards";
import Con from "./Service.style";
import { services } from "../../data/services.js";
import Form from "../../components/Form";
import ServiceInfo from "../../components/Form/ServiceInfo";
//import English from "../../pages/forms/english";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <Con id="services">
      <h1>Services</h1>
      <Con.Cards>
        {services.map((service, index) => (
          <Card
            key={index}
            image={service.src}
            title={service.title}
            description={service.description}
            setIsModalOpen={setIsModalOpen}
            setInfoModal={setInfoModal}
          />
        ))}
      </Con.Cards>
      <ServiceInfo infoModal={infoModal} setInfoModal={setInfoModal} />
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Con>
  );
}
