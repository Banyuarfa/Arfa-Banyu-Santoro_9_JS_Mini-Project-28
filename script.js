let fruits = [];
let currentEditIndex = null;

function refreshTable() {
  const tableBody = document.querySelector("#fruitTable tbody");
  tableBody.innerHTML = "";

  fruits.forEach((fruit, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${fruit.name}</td>
                    <td>${fruit.weight} Kg</td>
                    <td><img src="${
                      fruit.image
                    }" alt="Image" style="width: 50px; height: 50px;"></td>
                    <td>
                        <button class="edit" onclick="editData(${index})">Edit</button>
                        <button class="delete" onclick="deleteData(${index})">Hapus</button>
                    </td>
                `;

    tableBody.appendChild(row);
  });
}

function addData() {
  const nameInput = document.querySelector("#name");
  const weightInput = document.querySelector("#weight");
  const imageInput = document.querySelector("#image");

  if (currentEditIndex !== null) {
    fruits[currentEditIndex] = {
      name: nameInput.value,
      weight: weightInput.value,
      image: imageInput.value,
    };
    currentEditIndex = null;
  } else {
    fruits.push({
      name: nameInput.value,
      weight: weightInput.value,
      image: imageInput.value,
    });
  }

  nameInput.value = "";
  weightInput.value = "";
  imageInput.value = "";

  refreshTable();
}

function editData(index) {
  const fruit = fruits[index];
  currentEditIndex = index;

  document.querySelector("#name").value = fruit.name;
  document.querySelector("#weight").value = fruit.weight;
  document.querySelector("#image").value = fruit.image;
}

function deleteData(index) {
  fruits.splice(index, 1);
  refreshTable();
}
