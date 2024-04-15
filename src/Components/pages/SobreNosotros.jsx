import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import teamMembers from "../../js/team";
import MemberCard from "../cards/MemberCard";

const SobreNosotros = () => {
  return (
    <div className="bg-secondaryBlue">
      <div className="pb-15 pt-10">
        <h1 className="text-primaryWhite text-center w-[90%] mx-auto text-[30px] md:text-[40px] lg:text-fsHero font-medium ">
          Sobre Nosotros
        </h1>
        <p className="text-primaryWhite text-center w-[80%] my-20 mx-auto text-[20px]">
        El grupo detrás de la innovadora plataforma de alquiler de autos de lujo es un equipo diverso de emprendedores y especialistas apasionados por combinar lujo y tecnología, ofreciendo a viajeros globales acceso a una experiencia de alquiler única y personalizada.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] gap-2  mx-auto">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-20 pb-20">
        <Button
          size="lg"
          className="bg-primaryGold text-primaryWhite text-[24px]"
        >
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
};

export default SobreNosotros;
