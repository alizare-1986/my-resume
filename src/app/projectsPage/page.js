import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect} from "next/navigation";
import ProjectsPage from "@/template/ProjectsPage";


const Projects = async () => {
 
  const session = await getServerSession(authOptions);
  if (!session) {
   redirect("/signin")

  }

  return (
   <ProjectsPage/>
  );
};

export default Projects;
