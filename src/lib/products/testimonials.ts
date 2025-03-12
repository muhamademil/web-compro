import Backendless from "../backendless";

export interface ITestimonials {
  name: string;
  position: string;
  messege: string;
  photo: string;
}

export const getTestimonials = async (): Promise<ITestimonials[]> => {
  try {
    const testimoni = await Backendless.Data.of(
      "testimonials"
    ).find<ITestimonials>();
    return testimoni;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
