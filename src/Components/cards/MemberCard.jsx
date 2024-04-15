// En un nuevo archivo, por ejemplo, MemberCard.js
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const MemberCard = ({ name, role, image }) => {
  return (
    <Card shadow="sm" className="p-2  min-h-full">
      <CardBody className="overflow-visible p-0 hover:scale-[1.1] transition cursor-pointer  duration-100">
        <img
          radius="lg"
          width="100%"
          alt="imagen del auto"
          className="w-full object-cover h-[100%]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-small flex-col items-center min-h-[50px]">
        <h3>{name}</h3>
        <p>{role}</p>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
