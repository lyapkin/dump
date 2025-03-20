import PageNumber from "@/components/pagination/PageNumber";

const useGetPaginationPages = ({ page, pageCount, handleClick, disabled }) => {
  const pagesArr = Array.apply(null, Array(pageCount)).map((_, i) => i + 1);
  let pages;
  if (pageCount <= 7) {
    pages = pagesArr.map((i) => (
      <PageNumber
        key={i}
        active={page === i}
        pageNum={i}
        disabled={disabled}
        onClick={() => handleClick(i)}
      />
    ));
  } else if (page === 1 || page === 2 || page === 3) {
    pages = [1, 2, 3, 4, 5, "...", pageCount].map((i, index) => (
      <PageNumber
        key={String(i) + index}
        active={page === i}
        pageNum={i}
        disabled={i === "..." ? true : disabled}
        onClick={i === "..." ? null : () => handleClick(i)}
      />
    ));
  } else if (
    page === pageCount ||
    page === pageCount - 1 ||
    page === pageCount - 2
  ) {
    pages = [
      1,
      "...",
      pageCount - 4,
      pageCount - 3,
      pageCount - 2,
      pageCount - 1,
      pageCount,
    ].map((i, index) => (
      <PageNumber
        key={String(i) + index}
        active={page === i}
        pageNum={i}
        disabled={i === "..." ? true : disabled}
        onClick={i === "..." ? null : () => handleClick(i)}
      />
    ));
  } else {
    pages = [1, "...", page - 1, page, page + 1, "...", pageCount].map(
      (i, index) => (
        <PageNumber
          key={String(i) + index}
          active={page === i}
          pageNum={i}
          disabled={i === "..." ? true : disabled}
          onClick={i === "..." ? null : () => handleClick(i)}
        />
      )
    );
  }

  return pages;
};

export default useGetPaginationPages;
