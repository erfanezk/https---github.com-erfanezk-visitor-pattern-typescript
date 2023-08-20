import CreditCard from "./CreditCard";
import OfferVisitor from "../Visitors/Offer/OfferVisitor";
class BronzeCreditCard implements CreditCard {
  getName(): string {
    throw new Error("Method not implemented.");
  }
  acceptOffer(visitor: OfferVisitor): void {
    visitor.visitBronzeCreditCard(this);
  }
}
export default BronzeCreditCard;
