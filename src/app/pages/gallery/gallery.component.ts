import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { thumbnail: '../assets/img1.jpg', full: 'assets/img1-large.jpg', description: 'Image 1' },י
    { thumbnail: 'assets/img2.jpg', full: 'assets/img2-large.jpg', description: 'Image 2' },
    { thumbnail: 'assets/img3.jpg', full: 'assets/img3-large.jpg', description: 'Image 3' },
    { thumbnail: 'assets/img4.jpg', full: 'assets/img4-large.jpg', description: 'Image 4' },
    { thumbnail: 'assets/img5.jpg', full: 'assets/img5-large.jpg', description: 'Image 5' },
    { thumbnail: 'assets/img6.jpg', full: 'assets/img6-large.jpg', description: 'Image 6' },
    { thumbnail: 'assets/img7.jpg', full: 'assets/img7-large.jpg', description: 'Image 7' },
    { thumbnail: 'assets/img8.jpg', full: 'assets/img8-large.jpg', description: 'Image 8' },
    { thumbnail: 'assets/img9.jpg', full: 'assets/img9-large.jpg', description: 'Image 9' },
    { thumbnail: 'assets/img10.jpg', full: 'assets/img10-large.jpg', description: 'Image 10' },
    { thumbnail: 'assets/img11.jpg', full: 'assets/img11-large.jpg', description: 'Image 11' },
    { thumbnail: 'assets/img12.jpg', full: 'assets/img12-large.jpg', description: 'Image 12' },
    { thumbnail: 'assets/img13.jpg', full: 'assets/img13-large.jpg', description: 'Image 13' },
    { thumbnail: 'assets/img14.jpg', full: 'assets/img14-large.jpg', description: 'Image 14' },
    { thumbnail: 'assets/img15.jpg', full: 'assets/img15-large.jpg', description: 'Image 15' },
    { thumbnail: 'assets/img16.jpg', full: 'assets/img16-large.jpg', description: 'Image 16' },
    { thumbnail: 'assets/img17.jpg', full: 'assets/img17-large.jpg', description: 'Image 17' },
    { thumbnail: 'assets/img18.jpg', full: 'assets/img18-large.jpg', description: 'Image 18' },
    { thumbnail: 'assets/img19.jpg', full: 'assets/img19-large.jpg', description: 'Image 19' },
    { thumbnail: 'assets/img20.jpg', full: 'assets/img20-large.jpg', description: 'Image 20' },
    { thumbnail: 'assets/img21.jpg', full: 'assets/img21-large.jpg', description: 'Image 21' },
    { thumbnail: 'assets/img22.jpg', full: 'assets/img22-large.jpg', description: 'Image 22' },
    { thumbnail: 'assets/img23.jpg', full: 'assets/img23-large.jpg', description: 'Image 23' },
    { thumbnail: 'assets/img24.jpg', full: 'assets/img24-large.jpg', description: 'Image 24' },
    { thumbnail: 'assets/img25.jpg', full: 'assets/img25-large.jpg', description: 'Image 25' },
    { thumbnail: 'assets/img26.jpg', full: 'assets/img26-large.jpg', description: 'Image 26' },
    { thumbnail: 'assets/img27.jpg', full: 'assets/img27-large.jpg', description: 'Image 27' },
    { thumbnail: 'assets/img28.jpg', full: 'assets/img28-large.jpg', description: 'Image 28' },
    { thumbnail: 'assets/img29.jpg', full: 'assets/img29-large.jpg', description: 'Image 29' },
    { thumbnail: 'assets/img30.jpg', full: 'assets/img30-large.jpg', description: 'Image 30' },
    { thumbnail: 'assets/img31.jpg', full: 'assets/img31-large.jpg', description: 'Image 31' },
    { thumbnail: 'assets/img32.jpg', full: 'assets/img32-large.jpg', description: 'Image 32' },
    { thumbnail: 'assets/img33.jpg', full: 'assets/img33-large.jpg', description: 'Image 33' },
    { thumbnail: 'assets/img35.jpg', full: 'assets/img35-large.jpg', description: 'Image 35' },
    { thumbnail: 'assets/img36.jpg', full: 'assets/img36-large.jpg', description: 'Image 36' },
    { thumbnail: 'assets/img37.jpg', full: 'assets/img37-large.jpg', description: 'Image 37' },
    { thumbnail: 'assets/img38.jpg', full: 'assets/img38-large.jpg', description: 'Image 38' },
    // { thumbnail: 'assets/img39.jpg', full: 'assets/img39-large.jpg', description: 'Image 39' },
    // { thumbnail: 'assets/img40.jpg', full: 'assets/img40-large.jpg', description: 'Image 40' },
    // { thumbnail: 'assets/img41.jpg', full: 'assets/img41-large.jpg', description: 'Image 41' },
    // { thumbnail: 'assets/img42.jpg', full: 'assets/img42-large.jpg', description: 'Image 42' },
    // { thumbnail: 'assets/img43.jpg', full: 'assets/img43-large.jpg', description: 'Image 43' },
    // { thumbnail: 'assets/img44.jpg', full: 'assets/img44-large.jpg', description: 'Image 44' },
    // { thumbnail: 'assets/img45.jpg', full: 'assets/img45-large.jpg', description: 'Image 45' },
    // { thumbnail: 'assets/img46.jpg', full: 'assets/img46-large.jpg', description: 'Image 46' },
    // { thumbnail: 'assets/img47.jpg', full: 'assets/img47-large.jpg', description: 'Image 47' },
    // { thumbnail: 'assets/img48.jpg', full: 'assets/img48-large.jpg', description: 'Image 48' },
    // { thumbnail: 'assets/img49.jpg', full: 'assets/img49-large.jpg', description: 'Image 49' },
    // { thumbnail: 'assets/img50.jpg', full: 'assets/img50-large.jpg', description: 'Image 50' }
  ];
  

  isModalOpen = false;
  selectedImage: { full: string, description: string } = { full: '', description: '' };
  currentIndex: number = 0; // Track the current index of the image being viewed

  // Open modal and set the selected image
  openModal(image: { full: string, description: string }) {
    this.selectedImage = image;
    this.currentIndex = this.images.findIndex(img => img.full === image.full); // Set index of the selected image
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Change image (previous/next)
  changeImage(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Wrap around to the last image
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.images.length; // Wrap around to the first image
    }
    this.selectedImage = this.images[this.currentIndex]; // Update selected image based on new index
  }
}
