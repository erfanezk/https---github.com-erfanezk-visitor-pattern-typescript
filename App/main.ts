import BronzeCreditCard from "./Models/CreditCard/BronzeCreditCard";
import HotelOfferVisitor from "./Visitors/Offer/HotelOfferVisitor";

const hotelOfferVisitor = new HotelOfferVisitor();

const bronzeCreditCard = new BronzeCreditCard();
// const silverCreditCard = new SilverCreditCard();
// const goldCreditCard = new GoldCreditCard();

bronzeCreditCard.acceptOffer(hotelOfferVisitor);
