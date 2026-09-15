async function displayKeywords() {
  const keywordList = document.querySelector("#keyword-list");

  if (!keywordList) {
    return;
  }

  try {
    const response = await fetch("keyword.json");

    if (!response.ok) {
      throw new Error(`Không thể tải keyword.json: ${response.status}`);
    }

    const keywords = await response.json();

    keywordList.replaceChildren(
      ...keywords.map((keyword) => {
        const listItem = document.createElement("li");
        listItem.textContent = keyword;
        return listItem;
      }),
    );
  } catch (error) {
    console.error("Không thể hiển thị danh sách từ khóa.", error);
  }
}

displayKeywords();
