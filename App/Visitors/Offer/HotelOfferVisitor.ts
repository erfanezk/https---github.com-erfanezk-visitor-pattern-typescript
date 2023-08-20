import BronzeCreditCard from "../../CreditCard/BronzeCreditCard";
import GoldCreditCard from "../../Models/CreditCard/GoldCreditCard";
import SilverCreditCard from "../../CreditCard/SilverCreditCard";
import OfferVisitor from "./OfferVisitor";

export default class HotelOfferVisitor implements OfferVisitor {
  visitBronzeCreditCard(bronzeCreditCard: BronzeCreditCard): void {
    console.log("We are computing cashback for a bronze card booking hotel");
  }
  visitSilverCreditCard(silverCreditCard: SilverCreditCard): void {
    console.log("We are computing cashback for a silver card booking hotel");
  }
  visitGoldCreditCard(goldCreditCard: GoldCreditCard): void {
    console.log("We are computing cashback for a gold card booking hotel");
  }
}
