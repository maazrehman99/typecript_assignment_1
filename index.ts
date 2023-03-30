interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

async function fetchData() {
  const response = await fetch("https://dummyjson.com/users");
  const data: UsersResponse = await response.json();
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

  data.users.forEach((users: User) => {
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

  const container = document.getElementById("table-container")! as HTMLElement;
  container.appendChild(table);
}

fetchData();
