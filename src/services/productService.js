import axios from "axios"

export const fetchProducts = async () => {
    try {
        const res = await axios.get("Products.json");
        console.log(res.data);
        return res.data;
    } catch (err) {
        return err;
    }
}