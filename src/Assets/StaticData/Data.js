import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { SiAmericanexpress, SiJcb } from "react-icons/si";
import {
  RiBankCard2Fill,
  RiMastercardFill,
  RiSwitchFill,
} from "react-icons/ri";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const NavURL = [
  {
    id: 1,
    text: "Home",
    url: "",
    icon: "https://robohash.org/pariatureaesse.png?size=50x50&set=set1",
  },
  {
    id: 2,
    text: "Exchange",
    url: "exchanges",
    icon: "https://robohash.org/eligendiremet.png?size=50x50&set=set1",
  },
  {
    id: 3,
    text: "Coin",
    url: "coins",
    icon: "https://robohash.org/quiatotamasperiores.png?size=50x50&set=set1",
  },
  {
    id: 4,
    text: "Contact",
    url: "contact",
    icon: "https://robohash.org/beataeimpeditfugit.png?size=50x50&set=set1",
  },
  {
    id: 5,
    text: "Personal",
    url: "blog",
    icon: "https://robohash.org/beataeimpeditfugit.png?size=50x50&set=set1",
  }
];
const socialURL = [
  {
    id: 3,
    text: "americanexpress",
    url: "http://rambler.ru",
    icon: <BsFacebook></BsFacebook>,
  },
  {
    id: 10,
    text: "bankcard",
    url: "http://time.com",
    icon: <BsTwitter></BsTwitter>,
  },
  {
    id: 12,
    text: "switch",
    url: "https://joomla.org",
    icon: <BsYoutube></BsYoutube>,
  },
  {
    id: 17,
    text: "mastercard",
    url: "http://wix.com",
    icon: <BsGithub></BsGithub>,
  },
  {
    id: 18,
    text: "jcb",
    url: "https://twitpic.com",
    icon: <BsInstagram></BsInstagram>,
  },
  {
    id: 19,
    text: "jcb",
    url: "https://twitpic.com",
    icon: <FaTiktok></FaTiktok>,
  },
];
export { NavURL, socialURL };
