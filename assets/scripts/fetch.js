export const fetchApi = async (url) => {
  try {
    let response = await axios.get(url);
    let data = response.data;
    return data;
  } catch (error) {
    alert(error.message);
  }
};
