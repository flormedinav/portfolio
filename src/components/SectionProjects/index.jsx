import {
  Box,
  Button,
  CardMedia,
  Container,
  Hidden,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "../Title";
import { projects } from "./projects";
import PaginationComponent from "../Pagination";
import CardsProjects from "../CardsProjects";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./SectionProjects.module.css";

const SectionProjects = () => {
  const theme = useTheme();
  const projectsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Nuevo estado para controlar si se cargaron todas las imágenes
  const [initialLoadComplete, setInitialLoadComplete] = useState(true);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const projectsToShow = projects.slice(startIndex, endIndex);

  // const handleImagesLoaded = () => {
  //   setImagesLoaded(true);
  // };

  // useEffect(() => {
  //   setImagesLoaded(false); // Restablecer el estado cuando se cambia de página
  //   setInitialLoadComplete(false); // Restablecer el estado de carga inicial
  // }, [currentPage]);

  // useEffect(() => {
  //   if (!initialLoadComplete && imagesLoaded) {
  //     setInitialLoadComplete(true);
  //   }
  // }, [imagesLoaded, initialLoadComplete]);

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
          {/* {imagesLoaded ? ( // Mostrar el contenido principal solo cuando las imágenes están cargadas
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                mb: "1rem",
              }}
            >
              {projectsToShow.map(
                ({ name, img, description, github, tech }) => (
                  <CardsProjects
                    name={name}
                    description={description}
                    img={img}
                    github={github}
                    tech={tech}
                  />
                )
              )}
            </Box>
          ) : (
            // Mostrar un indicador de carga mientras las imágenes se cargan
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                my: "2rem",
                m: "17rem",
              }}
            >
              <CircularProgress />
            </Box>
          )} */}
          {initialLoadComplete ? ( // Mostrar el contenido principal solo cuando se completó la carga inicial
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                mb: "1rem",
              }}
            >
              {projectsToShow.map(
                ({ name, img, description, github, tech }) => (
                  <CardsProjects
                    name={name}
                    description={description}
                    img={img}
                    github={github}
                    tech={tech}
                  />
                )
              )}
            </Box>
          ) : (
            // Mostrar un indicador de carga mientras se carga el contenido inicial
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "850px", sm: "640px" },
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <PaginationComponent
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={Math.ceil(projects.length / projectsPerPage)}
          />
        </Box>
      </Container>
      <Hidden sx={{ display: "none" }}>
        {/* Cargar imágenes en un componente oculto para detectar cuando todas las imágenes se hayan cargado */}
        {projectsToShow.map(({ img }) => (
          <img
            className={styles.imgHidden}
            key={img}
            src={img}
            // onLoad={handleImagesLoaded}
            // onError={handleImagesLoaded}
            alt=""
            // sx={{ display: "none" }}
          />
        ))}
      </Hidden>
    </Box>
  );
};

export default SectionProjects;
