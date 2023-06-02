import { useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({
  currentPage,
  handlePageChange,
  totalPages,
}) {
  const theme = useTheme();
  console.log(theme);
  console.log(theme.palette.primary.main);
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        key={currentPage}
        sx={{
          "& .Mui-selected": {
            backgroundColor: `${theme.palette.primary.main} !important`,
          },
        }}
      />
    </Stack>
  );
}
