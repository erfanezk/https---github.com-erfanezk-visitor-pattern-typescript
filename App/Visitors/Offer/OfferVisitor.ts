import BronzeCreditCard from "../../CreditCard/BronzeCreditCard";
import GoldCreditCard from "../../Models/CreditCard/GoldCreditCard";
import SilverCreditCard from "../../CreditCard/SilverCreditCard";

interface OfferVisitor {
  visitBronzeCreditCard(bronzeCreditCard: BronzeCreditCard): void;
  visitSilverCreditCard(silverCreditCard: SilverCreditCard): void;
  visitGoldCreditCard(goldCreditCard: GoldCreditCard): void;
}
export default OfferVisitor;
