import OfferVisitor from "../../Visitors/Offer/OfferVisitor";
interface CreditCard {
  getName(): string;
  acceptOffer(visitor: OfferVisitor): void;
}
export default CreditCard;
