import Backendless from "../backendless";

export interface ITeamMember {
  name: string;
  position: string;
  photoUrl: string;
  expertise: string;
  email: string;
  linkedin: string;
}

export const getTeamMembers = async (): Promise<ITeamMember[]> => {
  try {
    const teamMembers = await Backendless.Data.of("teams").find<ITeamMember>();
    return teamMembers;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};
