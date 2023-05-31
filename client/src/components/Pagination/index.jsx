import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent() {
  return (
    <Stack spacing={2}>
      <Pagination count={4} showFirstButton showLastButton />
    </Stack>
  );
}
