const generateBtn = document.getElementById('generate-btn');
const memeImage = document.getElementById('meme-image');

generateBtn.addEventListener('click', async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const memes = data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeImage.src = randomMeme.url;
});