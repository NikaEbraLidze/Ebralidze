import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/constants/social";
import { ContactView } from ".";

export const ContactContainer = () => {
  return (
    <ContactView mailto={CONTACT_MAILTO} emailLabel={CONTACT_EMAIL} />
  );
};
