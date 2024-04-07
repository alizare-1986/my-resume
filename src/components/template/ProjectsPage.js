import projects from "src/constant/projects"

const ProjectsPage = () => {
  return (
    <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {projects.map((item) => (
      <a
        key={item.id}
        style={{
          marginBottom: "30px",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
        href={item.project}
      >
        {item.title}
      </a>
    ))}
   
  
  </div>
  )
}

export default ProjectsPage
