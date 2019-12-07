import React from "react";
import classnames from "classnames";

const generatePage = (pageIndex, totalPages) => {
  const delta = 2;
  const pages = [];
  for (
    let i = Math.max(2, pageIndex - delta);
    i <= Math.min(totalPages - 1, pageIndex + delta);
    i++
  ) {
    pages.push(i);
  }

  if (pageIndex - delta > 2) {
    pages.unshift("...");
  }

  if (pageIndex + delta < totalPages - 1) {
    pages.push("...");
  }

  pages.unshift(1);
  pages.push(totalPages);
  return pages;
};

//rest parameters
const Pagination = ({ totalPages, pageIndex, _changePage }) => {
  // totalpage = Math.ciel(totalCount / pageSize) Công thức tính tổng số page nếu BE không trả về tổng số page

  // Nếu tổng số page < 2 => không cần render ra
  if (totalPages < 2) {
    return null;
  }
  const pages = generatePage(pageIndex, totalPages);
  return (
    <div className="d-flex justify-content-center mt-3 pb-3">
      {pages.map((item, index) => (
        <button
          key={index}
          disabled={item === "..."}
          onClick={() => _changePage(item)}
          className={classnames("btn mx-1", {
            "btn-primary": pageIndex === item,
            "btn-secondary": pageIndex !== item
          })}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
