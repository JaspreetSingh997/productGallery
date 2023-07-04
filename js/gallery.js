// Get the main featured image and thumbnail images
const mainImage = document.querySelector('#gallery figure img');
const thumbnailImages = document.querySelectorAll('#gallery ul li img');

// Set the source attributes of the featured image and thumbnails
mainImage.src = 'images/flowers-pink-large.jpg';

// Mapping of thumbnail images to their corresponding full-sized images
const thumbnailToFullSize = {
  'images/flowers-pink-small.jpg': 'images/flowers-pink-large.jpg',
  'images/flowers-purple-small.jpg': 'images/flowers-purple-large.jpg',
  'images/flowers-red-small.jpg': 'images/flowers-red-large.jpg',
  'images/flowers-white-small.jpg': 'images/flowers-white-large.jpg',
  'images/flowers-yellow-small.jpg': 'images/flowers-yellow-large.jpg',
};

// Set the event listener for each thumbnail image
thumbnailImages.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // Get the source and alt attributes of the clicked thumbnail
    const thumbnailSrc = thumbnail.getAttribute('src');
    const thumbnailAlt = thumbnail.getAttribute('alt');

    // Set the source and alt attributes of the featured image
    mainImage.src = thumbnailToFullSize[thumbnailSrc];
    mainImage.alt = thumbnailAlt;

    // Update the caption
    const caption = document.querySelector('#gallery figure figcaption');
    caption.textContent = thumbnailAlt;
  });
});


// Dynamic Thumbnail 

const galleryItems = [
  {
    src: 'images/flowers-pink-large.jpg',
    thumbnail: 'images/flowers-pink-small.jpg',
    alt: 'Market in Münster',
    caption: 'Market in Münster, North Rhine-Westphalia, Germany',
  },
  {
    src: 'images/flowers-purple-large.jpg',
    thumbnail: 'images/flowers-purple-small.jpg',
    alt: 'Sentmaring Park',
    caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
  },
  {
    src: 'images/flowers-red-large.jpg',
    thumbnail: 'images/flowers-red-small.jpg',
    alt: 'Poppies in cornfield',
    caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
  },
  {
    src: 'images/flowers-white-large.jpg',
    thumbnail: 'images/flowers-white-small.jpg',
    alt: 'Daffodils in Sentmaring park',
    caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany',
  },
  {
    src: 'images/flowers-yellow-large.jpg',
    thumbnail: 'images/flowers-yellow-small.jpg',
    alt: 'Sunflowers in the hamlet Dernekamp',
    caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
  },
];


const thumbnailList = document.getElementById('thumbnailList');
const imageCaption = document.getElementById('imageCaption');
const imageInfo = document.getElementById('imageInfo');

// Dynamically generate thumbnail list
galleryItems.forEach((item) => {
  const listItem = document.createElement('li');
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = item.thumbnail;
  thumbnailImg.alt = item.alt;
  listItem.appendChild(thumbnailImg);
  thumbnailList.appendChild(listItem);
});

// Add click event listeners to thumbnails
const thumbnails = document.querySelectorAll('#thumbnailList img');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // Set featured image source and caption
    //const featuredImage = document.querySelector('#gallery figure img');
    mainImage.src = galleryItems[index].src;
    imageCaption.textContent = galleryItems[index].caption;

    // Remove 'active' class from all thumbnails
    thumbnails.forEach((thumb) => {
      thumb.classList.add('active');
    });

    // Add 'active' class to clicked thumbnail
    thumbnail.classList.remove('active');
  });
});
