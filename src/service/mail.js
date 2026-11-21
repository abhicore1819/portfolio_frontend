import axios from "axios";
import { AwardIcon, ImageOff } from "lucide-react";

const SendMail = async (query_obj) => {
  try {
    const URL = import.meta.env.VITE_MAIL;
    const request = await axios.post(URL, query_obj);
    const response = await request.data;
    return response;
  } catch (error) {
    return `and error occured:- ${error}`;
  }
};

export { SendMail };
