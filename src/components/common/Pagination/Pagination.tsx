import { IPaginationProps } from "../../../core/interfaces/Common";
import {
  PaginationContainer,
  PaginationNumbers,
  PaginationButton,
} from "./Pagination.style";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: IPaginationProps) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      <PaginationNumbers>
        {pages.map((page, index) => (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
          >
            {page}
          </PaginationButton>
        ))}
      </PaginationNumbers>
      <PaginationButton
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
