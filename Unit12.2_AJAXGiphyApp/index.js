// working API key //
const giphyApiKey = "K0m0fy5woZZihUr14MyDO95CaeCQDj5Y";

// save button and div ids to variables for reference
const fetchGifButton = document.getElementById("fetchGif");
const clearGifButton = document.getElementById("clearGif");
const gifDisplayDiv = document.getElementById("gifDisplay");

// add event listeners to run functions on button clicks //
fetchGifButton.addEventListener("click", generateGifs);
clearGifButton.addEventListener("click", clearGifs);

// API request to return the GIF url //
async function getGif(query) {

  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}&limit=5`);

  return response.data.data.map((val) => {
    return {
      gifURL: val.images.fixed_width.url
    }
  });
}

// this function will get the input data //
function getInputData() {
  // grab the input value and return it //
  const dataInput = document.getElementById("userInput");
  return dataInput.value;
}

async function generateGifs(e) {
  e.preventDefault();

  gifDisplayDiv.innerHTML = "";

  const inputData = getInputData(); 
  const gifs = await getGif(inputData)
  const image = document.createElement("img");

  image.src = gifs[0].gifURL;

  // append gif to the parent <div> //
  gifDisplayDiv.appendChild(image);
};

// this function will clear the created GIFs //
function clearGifs() {
    gifDisplayDiv.innerHTML = "";
}
