import OfferVisitor from "../../Visitors/Offer/OfferVisitor";
import CreditCard from "./CreditCard";

class GoldCreditCard implements CreditCard {
  getName(): string {
    throw new Error("Method not implemented.");
  }
  acceptOffer(visitor: OfferVisitor): void {
    visitor.visitGoldCreditCard(this);
  }
}
export default GoldCreditCard;
