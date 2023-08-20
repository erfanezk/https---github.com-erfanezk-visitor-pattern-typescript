import CreditCard from "./CreditCard";
import OfferVisitor from "../../Visitors/Offer/OfferVisitor";
class GoldCreditCard implements CreditCard {
  getName(): string {
    throw new Error("Method not implemented.");
  }
  acceptOffer(visitor: OfferVisitor): void {
    visitor.visitGoldCreditCard(this);
  }
}
export default GoldCreditCard;
