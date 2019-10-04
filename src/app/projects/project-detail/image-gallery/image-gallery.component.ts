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
  images=[];
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
  projectId;
  ngOnInit() {
    this.projectId=JSON.parse(localStorage.getItem('projectSelected')).id;
    if(this.projectId == 24){
      this.images = [
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
      ];
    }
    if(this.projectId == 25){
      this.images = [
        "http://www.spectraindia.in/wp-content/uploads/2016/10/diamond.jpg",
        "assets/diamondJ/1.jpg",
        "assets/diamondJ/2.jpg",
        "assets/diamondJ/3.jpg",
        "assets/diamondJ/4.jpg",
        "assets/diamondJ/5.jpg",
        "assets/diamondJ/6.jpg",
        // "assets/diamondJ/4.jpg",
        // "assets/diamondJ/5.jpg",
        // "assets/diamondJ/6.jpg",
        "assets/viceroyce/Viceroyce1.jpeg",
        "assets/viceroyce/Viceroyce2.jpeg",
        "assets/viceroyce/viceroyce7.png",
      ];
    }
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
