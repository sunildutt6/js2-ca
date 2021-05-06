import createList from "./createList.js";

export default function searchData(data) {
  const search = document.querySelector(".search");
  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredData = data.filter(function (item) {
      if (item.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    data = filteredData;
    createList(filteredData);
  };
}
