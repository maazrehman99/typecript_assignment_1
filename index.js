"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://dummyjson.com/users");
        const data = yield response.json();
        console.log(data);
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const userID = document.createElement("th");
        userID.innerText = "ID";
        const userName = document.createElement("th");
        userName.innerText = "Maiden Name";
        const userAge = document.createElement("th");
        userAge.innerText = "Age";
        const userGender = document.createElement("th");
        userGender.innerText = "Gender";
        const userHeight = document.createElement("th");
        userHeight.innerText = "Height";
        const userWeight = document.createElement("th");
        userWeight.innerText = "Weight";
        const userEmail = document.createElement("th");
        userEmail.innerText = "Email";
        const userPhone = document.createElement("th");
        userPhone.innerText = "Phone";
        headerRow.appendChild(userID);
        headerRow.appendChild(userName);
        headerRow.appendChild(userAge);
        headerRow.appendChild(userGender);
        headerRow.appendChild(userHeight);
        headerRow.appendChild(userWeight);
        headerRow.appendChild(userEmail);
        headerRow.appendChild(userPhone);
        table.appendChild(headerRow);
        data.users.forEach((users) => {
            const row = document.createElement("tr");
            const idCell = document.createElement("td");
            idCell.innerText = users.id.toString();
            const nameCell = document.createElement("td");
            nameCell.innerText = users.maidenName;
            const ageCell = document.createElement("td");
            ageCell.innerText = users.age.toString();
            const genderCell = document.createElement("td");
            genderCell.innerText = users.gender;
            const heightCell = document.createElement("td");
            heightCell.innerText = users.height.toString();
            const weightCell = document.createElement("td");
            weightCell.innerText = users.weight.toString();
            const emailCell = document.createElement("td");
            emailCell.innerText = users.email;
            const phoneCell = document.createElement("td");
            phoneCell.innerText = users.phone;
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(ageCell);
            row.appendChild(genderCell);
            row.appendChild(heightCell);
            row.appendChild(weightCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            table.appendChild(row);
        });
        const container = document.getElementById("table-container");
        container.appendChild(table);
    });
}
fetchData();
