import { Component, OnInit, ElementRef } from "@angular/core";
declare var $: any;
@Component({
  selector: "image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.css"]
})
export class ImageGalleryComponent implements OnInit {
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }
  images = [
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/car.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/city.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/deer.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/flowers.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/food.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/guy.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/landscape.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/lips.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/night.jpg",
    // "https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/table.jpg"
    "assets/viceroyce/ViceroyceResidencyImage.png",
    "assets/viceroyce/Viceroyce1.jpeg",
    "assets/viceroyce/Viceroyce2.jpeg",
    "assets/viceroyce/Viceroyce4.jpeg",
    "assets/viceroyce/Viceroyce9.jpeg",
    "assets/viceroyce/viceroyce5.png",
    "assets/viceroyce/viceroyce6.png",
    "assets/viceroyce/viceroyce7.png",
    "assets/viceroyce/viceroyce8.png",
    "assets/viceroyce/viceroyce9.png",
    // "http://www.spectraindia.in/wp-content/uploads/2016/03/bathroom.jpg",
    // "http://www.spectraindia.in/wp-content/uploads/2016/03/kidsroom.jpg",
    // "http://www.spectraindia.in/wp-content/uploads/2016/09/Streetlights.jpg",
    // "http://www.spectraindia.in/wp-content/uploads/2016/02/Education-Center.jpg",
    // "http://www.spectraindia.in/wp-content/uploads/2016/02/Vedapatashala.jpg",
    // "http://www.spectraindia.in/wp-content/uploads/2016/02/Yoga.jpg",
  ];
  gallery;
  galleryItems;
  numOfItems;
  itemWidth = 18;
  featured;
  leftBtn;
  rightBtn;
  leftInterval;
  rightInterval;
  scrollRate = 0.2;
  left;
  selectItem(e) {
    if (e.target.classList.contains("active")) return;
    this.featured.style.backgroundImage = e.target.style.backgroundImage;
    for (var i = 0; i < this.galleryItems.length; i++) {
      if (this.galleryItems[i].classList.contains("active"))
        this.galleryItems[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }

  galleryWrapLeft() {
    var first = this.gallery.children[0];
    this.gallery.removeChild(first);
    this.gallery.style.left = -this.itemWidth + "%";
    this.gallery.appendChild(first);
    this.gallery.style.left = "0%";
  }

  galleryWrapRight() {
    var last = this.gallery.children[this.gallery.children.length - 1];
    this.gallery.removeChild(last);
    this.gallery.insertBefore(last, this.gallery.children[0]);
    this.gallery.style.left = "-23%";
  }

  moveLeft() {
    
    this.left = this.left || 0;
    this.leftInterval = setInterval( () => {
      this.gallery.style.left = this.left + "%";
      if (this.left > -this.itemWidth) {
        this.left -= this.scrollRate;
      } else {
        this.left = 0;
        this.galleryWrapLeft();
      }
    },1);
  }
  moveRight() {
    if (this.left > -this.itemWidth && this.left < 0) {
      this.left = this.left - this.itemWidth;

      var last = this.gallery.children[this.gallery.children.length - 1];
      this.gallery.removeChild(last);
      this.gallery.style.left = this.left + "%";
      this.gallery.insertBefore(last, this.gallery.children[0]);
    }

    this.left = this.left || 0;
    this.leftInterval = setInterval( ()=>{
      this.gallery.style.left = this.left + "%";

      if (this.left < 0) {
        this.left += this.scrollRate;
      } else {
        this.left = -this.itemWidth;
        this.galleryWrapRight();
      }
    },1);


  }
  stopMovement() {
    clearInterval(this.leftInterval);
    clearInterval(this.rightInterval);
  }
  ngOnInit() {
    this.gallery = this.el.nativeElement.querySelector(".gallery");
    this.galleryItems = this.el.nativeElement.querySelectorAll(".gallery-item");
    this.numOfItems = this.gallery.children.length;
    this.featured = this.el.nativeElement.querySelector(".featured-item");
    this.leftBtn = this.el.nativeElement.querySelector(".move-btn.left");
    this.rightBtn = this.el.nativeElement.querySelector(".move-btn.right");
    this.featured.style.backgroundImage = "url(" + this.images[0] + ")";
    for (var i = 0; i < this.galleryItems.length; i++) {
      this.galleryItems[i].style.backgroundImage =
        "url(" + this.images[i] + ")";
    }
  }
}
