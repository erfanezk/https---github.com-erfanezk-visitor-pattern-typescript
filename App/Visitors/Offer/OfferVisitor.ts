import BronzeCreditCard from "../../Models/CreditCard/BronzeCreditCard";
import GoldCreditCard from "../../Models/CreditCard/GoldCreditCard";
import SilverCreditCard from "../../Models/CreditCard/SilverCreditCard";

interface OfferVisitor {
  visitBronzeCreditCard(bronzeCreditCard: BronzeCreditCard): void;
  visitSilverCreditCard(silverCreditCard: SilverCreditCard): void;
  visitGoldCreditCard(goldCreditCard: GoldCreditCard): void;
}
export default OfferVisitor;
