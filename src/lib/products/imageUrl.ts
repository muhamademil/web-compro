import Backendless from "../backendless";

interface Background {
  image: string;
}

export const getBackgroundImage = async (): Promise<string[]> => {
  try {
    const data = await Backendless.Data.of("background").find<Background>();
    // console.log("ini dataaa", data);
    return data.map((item) => item.image);
  } catch (error) {
    console.error("error fetching background image : ", error);
    return [];
  }
};
