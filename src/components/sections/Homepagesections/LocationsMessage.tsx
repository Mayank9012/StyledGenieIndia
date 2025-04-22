import { typography } from "@/styles/typography";
import Container from "../../ui/Container";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoLocation } from "react-icons/go";


const LocationsMessage = () => {
  return (
    <section className="bg-gray-200">
    <Container marginLeft="5vw" marginRight="5vw">
      <div
        className={`flex items-center justify-center py-8 italic ${typography.body.B1} max-w-3xl mx-auto text-center`}
      >
        <p className="flex items-center justify-center gap-3 font-medium">
          <GoLocation  className="flex-shrink-0 text-lg" size={40} /> 
          Our services are currently available online across India, with in-person styling currently offered only in Jaipur, Delhi, Mumbai, and Pune.
        </p>
      </div>
    </Container>
    </section>
  );
}

export default LocationsMessage;
