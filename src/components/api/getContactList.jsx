import axios from "axios";
import { API_URL } from "./config/Config";

export const getContactList = async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);

//       if (response.status >= 200 && response.status < 300) {
//         return response.data;
//       } else {
//         throw new Error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       throw error;
//     }
// };
return response.data;
} catch (error) {
  throw error;
}
};

