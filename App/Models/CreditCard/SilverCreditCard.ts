import CreditCard from "./CreditCard";
import OfferVisitor from "../../Visitors/Offer/OfferVisitor";
class SilverCreditCard implements CreditCard {
  getName(): string {
    throw new Error("Method not implemented.");
  }
  acceptOffer(visitor: OfferVisitor): void {
    visitor.visitSilverCreditCard(this);
  }
}
export default SilverCreditCard;
