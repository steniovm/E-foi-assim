const startscreem = document.getElementById("startscreem");
const loaderfich = document.getElementById("loaderfich");
const searchfich = document.getElementById("searchfich");
const setupfich = document.getElementById("setupfich");
const datafich = document.getElementById("datafich");
const newfichButton = document.getElementById("newfich");
const loadfichButton = document.getElementById("loadfich");
const findfichButton = document.getElementById("findfich");
const backButton = document.getElementsByClassName("backButton");
const fileInput = document.getElementById("fileInput");
const inputsdata = document.getElementsByClassName("dataunic");
const inputsMarcodata = document.getElementsByClassName("marcoInput");
const inputsMarcoExdata = document.getElementsByClassName("marcoExInput");

const fichData = {
  scale: "",
  title: "",
  scientist: "",
  objective: "",
  detailing: "",
  eventsmain: [],
  eventsextra: [],
  author: "",
  date: "",
};

newfichButton.addEventListener("click", () => {
  startscreem.classList.add("hidden");
  setupfich.classList.remove("hidden");
});

for (let i = 0; i < backButton.length; i++) {
  backButton[i].addEventListener("click", () => {
    setupfich.classList.add("hidden");
    startscreem.classList.remove("hidden");
    console.log("Back button clicked");
  });
}

function fichverifiqued() {
  if (
    fichData.scale ||
    fichData.title ||
    fichData.scientist ||
    fichData.objective ||
    fichData.detailing ||
    fichData.eventsmain.length > 0 ||
    fichData.eventsextra.length > 0 ||
    fichData.author ||
    fichData.date
  ) {
    return true;
  }
  return false;
}

function setFichData(field, value) {
  if (field in fichData) {
    fichData[field] = value;
  } else {
    console.warn(`Field "${field}" does not exist in fichData.`);
  }
}
function pushFichData(field, value) {
  if (field in fichData) {
    fichData[field].push(value);
  } else {
    console.warn(`Field "${field}" does not exist in fichData.`);
  }
}

for (let i = 0; i < inputsdata.length; i++) {
  inputsdata[i].addEventListener("change", (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFichData(fieldName, fieldValue);
    console.log(`Updated ${fieldName}: ${fieldValue}`);
    console.log("Current fichData:", fichData);
  });
}

function seteventinmarcodata() {
  for (let i = 0; i < inputsMarcodata.length; i++) {
    inputsMarcodata[i].addEventListener("change", (event) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      fichData[fieldName] = [];
      for (let i = 0; i < inputsMarcodata.length; i++) {
        pushFichData(fieldName, inputsMarcodata[i].value);
      }
      console.log(`Updated ${fieldName}: ${fieldValue}`);
      console.log("Current fichData:", fichData);
    });
  }
}
seteventinmarcodata();
function seteventinmarcoexdata() {
  for (let i = 0; i < inputsMarcoExdata.length; i++) {
    inputsMarcoExdata[i].addEventListener("change", (event) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      fichData[fieldName] = [];
      for (let i = 0; i < inputsMarcoExdata.length; i++) {
        pushFichData(fieldName, inputsMarcoExdata[i].value);
      }
      console.log(`Updated ${fieldName}: ${fieldValue}`);
      console.log("Current fichData:", fichData);
    });
  }
}
seteventinmarcoexdata();

function loadfich(fichLoaded) {
  if (fichLoaded.scale) {
    fichData.scale = fichLoaded.scale;
  }
  if (fichLoaded.title) {
    fichData.title = fichLoaded.title;
  }
  if (fichLoaded.scientist) {
    fichData.scientist = fichLoaded.scientist;
  }
  if (fichLoaded.objective) {
    fichData.objective = fichLoaded.objective;
  }
  if (fichLoaded.detailing) {
    fichData.detailing = fichLoaded.detailing;
  }
  if (fichLoaded.eventsmain) {
    fichData.eventsmain = fichLoaded.eventsmain;
  }
  if (fichLoaded.eventsextra) {
    fichData.eventsextra = fichLoaded.eventsextra;
  }
  if (fichLoaded.author) {
    fichData.author = fichLoaded.author;
  }
  if (fichLoaded.date) {
    fichData.date = fichLoaded.date;
  }
}

loadfichButton.addEventListener("click", () => {
  if (fichverifiqued()) {
    const confirmLoad = confirm(
      "Você tem dados não salvos. Deseja continuar e perder os dados atuais?",
    );
    if (!confirmLoad) {
      return;
    }
  }
  fileInput.click();
});
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      try {
        const jsonData = JSON.parse(fileContent);
        loadfich(jsonData);
        console.log("JSON data:", jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  }
});

findfichButton.addEventListener("click", () => {
  startscreem.classList.add("hidden");
  searchfich.classList.remove("hidden");
});
