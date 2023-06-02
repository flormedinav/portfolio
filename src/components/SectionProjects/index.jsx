import {
  Box,
  Button,
  CardMedia,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "../Title";
import { projects } from "./projects";
import PaginationComponent from "../Pagination";
import CardsProjects from "../CardsProjects";
import { useEffect, useState } from "react";

const SectionProjects = () => {
  const theme = useTheme();
  const projectsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const projectsToShow = projects.slice(startIndex, endIndex);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "6rem",
        pb: "6rem",
      }}
    >
      <Container sx={{ width: "100%" }}>
        <Title text="Proyectos" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              mb: "1rem",
            }}
          >
            {projectsToShow.map(({ name, img, description, github, tech }) => (
              <CardsProjects
                name={name}
                description={description}
                img={img}
                github={github}
                tech={tech}
              />
            ))}
          </Box>
          <PaginationComponent
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={Math.ceil(projects.length / projectsPerPage)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionProjects;
