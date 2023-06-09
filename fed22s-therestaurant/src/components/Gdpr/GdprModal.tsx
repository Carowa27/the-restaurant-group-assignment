import { H3Modal, H3Normal, H4 } from "../styled/Headings";
import { Modal, ModalContent, ModalHead } from "../styled/Modals";
import { ParagraphModal } from "../styled/Paragraphs";

export const GdprModal = () => {
  return (
    <>
      <Modal>
        <ModalContent>
          <ModalHead>
            <H3Modal>GDPR</H3Modal>
            <ParagraphModal>x</ParagraphModal>
          </ModalHead>
          <H4>Dataskyddsförklaring</H4>
          <p>
            Denna dataskyddsförklaring beskriver hur Glass i Stora Lass AB
            samlar in, använder och skyddar personlig information som du
            tillhandahåller när du använder vår webbplats eller gör en bokning
            hos oss. Vi värnar om din integritet och strävar efter att skydda
            och respektera dina personuppgifter i enlighet med gällande
            dataskyddslagar, inklusive EU:s allmänna dataskyddsförordning
            (GDPR).
          </p>
          <H4>Insamling av personlig information</H4>
          <p>
            Vi kan samla in och behandla följande typer av personlig information
            när du bokar ett bord hos oss eller kontaktar oss via vår webbplats:
            Namn E-postadress Telefonnummer Eventuella specialförfrågningar
            eller övrig information som du väljer att lämna till oss
          </p>
          <H4>Användning av personlig information</H4>
          <p>
            Vi använder den personliga informationen som du tillhandahåller för
            att: Hantera och bekräfta din bokning Kontakta dig angående din
            bokning eller förfrågan Skicka dig relevant information och
            erbjudanden om våra tjänster (om du har gett ditt samtycke till
            detta) Förbättra våra tjänster och kommunicera med dig om ändringar
            eller uppdateringar
          </p>
          <H4>Lagring av personlig information</H4>
          <p>
            Vi kommer att lagra din personliga information så länge det är
            nödvändigt för att uppfylla de ändamål som anges ovan eller enligt
            gällande lagstiftning. Vi vidtar lämpliga tekniska och
            organisatoriska åtgärder för att skydda din personliga information
            mot obehörig åtkomst, oavsiktlig förlust eller förstörelse. Dela
            personlig information Vi kommer inte att dela, sälja, överföra eller
            på annat sätt lämna ut din personliga information till tredje part
            utan ditt samtycke, förutom i följande situationer: Om det krävs
            enligt lag eller för att efterleva rättsliga förfaranden För att
            skydda våra rättigheter, egendom eller säkerhet, samt rättigheterna,
            egendomen och säkerheten för våra användare eller andra Med tredje
            parter som tillhandahåller tjänster åt oss och som är bundna av
            sekretessavtal
          </p>
          <H4> Dina rättigheter</H4>
          <p>
            Du har rätt att begära åtkomst till och rättelse av den personliga
            information som vi har om dig. Om du vill begära en kopia av den
            information som vi har om dig, eller om du vill att vi rättar
            eventuella felaktigheter, vänligen kontakta oss på
            gdpr@glassisstoralass.se. Du har också rätt att invända mot eller
            begära begränsning av behandlingen av din personliga information
            samt att begära att vi raderar din information. Observera att vissa
            rättigheter kan vara föremål för begränsningar enligt gällande
            lagstiftning.
          </p>
          <H4>Kontakta oss</H4>
          <p>
            Om du har några frågor eller funderingar om vår dataskyddsförklaring
            eller vår hantering av personlig information, är du välkommen att
            kontakta oss på gdpr@glassisstoralass.se.
          </p>
          <button /*onClick={}*/>Stäng</button>
        </ModalContent>
      </Modal>
    </>
  );
};
